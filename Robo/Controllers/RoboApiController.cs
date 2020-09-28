using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Robo.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Robo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RoboApiController : Controller
    {
        public Interface _robo;

        public RoboApiController(Interface robo)
        {
            _robo = robo;
        }

        // GET: api/<RoboApiController>
        [HttpGet]
        public ReturnRobo GetRobo()
        {

            ReturnRobo send = new ReturnRobo();
            send.RoboReturn = _robo.GetRobo();
            send.StatusReturn = true;
            send.MensageReturn = "Robo ok !!!";

            return send;
        }


        // POST api/<RoboApiController>
        [HttpPost]
        public ReturnRobo PostRobo([FromBody] RoboApp robo)
        {

            ReturnRobo send = new ReturnRobo();
            send.RoboReturn = robo;
            //Classe auxiliar para enviar os parametros para verificações
            RoboAux roboAux = new RoboAux();

            //Variaveis de Retorno
            send.StatusReturn = true;
            send.MensageReturn = "Robo ok !!!";

            if (robo.Head == null && robo.LeftElbow == null && robo.LeftPulse == null && robo.RightElbow == null && robo.RightPulse == null)
            {
                send.StatusReturn = false;
                send.MensageReturn = "Não encontramos o Robo, Envie algo primeiro!!!";
                send.RoboReturn = _robo.GetRobo();
            }
            else
            {
                //verifica a cabeca
                var cabeca = HeadVerification(robo.Head);
                send.StatusReturn = cabeca.Item1;
                send.MensageReturn = cabeca.Item2;
                if (send.StatusReturn == false)
                    return send;


                //verifica cotovelo e pulso esquerdo
                roboAux.Elbow = robo.LeftElbow;
                roboAux.Pulse = robo.LeftPulse;
                var left = PulseVerification(roboAux);
                send.StatusReturn = left.Item1;
                send.MensageReturn = left.Item2;
                if (send.StatusReturn == false)
                    return send;

                //verifica cotovelo e pulso direito
                roboAux.Elbow = robo.RightElbow;
                roboAux.Pulse = robo.RightPulse;
                var rigth = PulseVerification(roboAux);
                send.StatusReturn = rigth.Item1;
                send.MensageReturn = rigth.Item2;
                if (send.StatusReturn == false)
                    return send;
            }
            return send;
        }

        [ApiExplorerSettings(IgnoreApi = true)]
        public (bool, string) HeadVerification(Head head)
        {
            //declaração dos retornos
            bool verifi = true;
            string mensage = "Robo ok!";

            //verifica se o robo tem cabeca
            if (head != null)
            {
                //se a cabeca estiver para baixo verifica se esta rotacionada
                if (head.Inclination < -1 || head.Inclination > 1)
                {
                    verifi = false;
                    mensage = "Ops, Cabeça quebrou !!!";
                }
                else if (head.Inclination < 0)
                {
                    if (head.Rotation != 0)
                    {
                        verifi = false;
                        mensage = "Ops, Cabeça não pode estar para Baixo, e Rotacionada ao mesmo tempo !!!";
                    }
                }
                else if (head.Inclination >= 0)
                {
                    if (head.Rotation > 90 || head.Rotation < -90)
                    {
                        verifi = false;
                        mensage = "Ops, Cabeça rotacionou muito !!!";
                    }
                }
            }
            else
            {
                verifi = false;
                mensage = "Ops, Robo sem cabeça !!!";
            }

            return (verifi, mensage);
        }

        [ApiExplorerSettings(IgnoreApi = true)]
        public (bool, string) PulseVerification(RoboAux robo)
        {
            var elbow = robo.Elbow;
            var pulse = robo.Pulse;

            //declaração dos retornos
            bool verifi = true;
            string mensage = "Robo ok !!!";

            //verifica se o robo tem cotovelo e pulso
            if (elbow != null || pulse != null)
            {
                if(elbow.Contraction < 0 || elbow.Contraction > 3)
                {
                    verifi = false;
                    mensage = "Ops, Cotovelo Quebrou !!!";
                }
                else if (pulse.Rotation != 0 && elbow.Contraction != 3)
                {
                    verifi = false;
                    mensage = "Ops, Robo só pode movimentar o Pulso se Cotovelo estiver Fortemente Contraido !!!";
                }
                else if(pulse.Rotation < -90 || pulse.Rotation > 180)
                {
                    verifi = false;
                    mensage = "Ops, Pulso se moveu muito !!!";
                }
            }
            else
            {
                verifi = false;
                mensage = "Ops, Robo sem Cotovelo ou Pulso !!!";
            }

            return (verifi, mensage);
        }

    }
}
