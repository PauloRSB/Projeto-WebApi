using Microsoft.VisualStudio.TestTools.UnitTesting;
using Robo.Controllers;
using Robo.Models;
using RoboTests.Fake;
using System;
using System.Collections.Generic;
using System.Text;

namespace Robo.Controllers.Tests
{
    [TestClass()]
    public class RoboApiControllerTests
    {
        RoboApiController _controller;
        FakeRepository _service;
        public RoboApiControllerTests()
        {
            _service = new FakeRepository();
            _controller = new RoboApiController(_service);
        }

        [TestMethod()]
        public void RoboApiControllerGet()
        {
            var repository = new FakeRepository();
            ReturnRobo esperado = new ReturnRobo();
            esperado.RoboReturn = repository.GetRobo();
            esperado.StatusReturn = true;
            esperado.MensageReturn = "Robo ok !!!";

            //Act
            var atual = _controller.GetRobo();


            Assert.AreEqual(esperado.MensageReturn, atual.MensageReturn);
            Assert.AreEqual(esperado.StatusReturn, atual.StatusReturn);

            Assert.AreEqual(esperado.RoboReturn.Head.Inclination, atual.RoboReturn.Head.Inclination);
            Assert.AreEqual(esperado.RoboReturn.Head.Rotation, atual.RoboReturn.Head.Rotation);
            Assert.AreEqual(esperado.RoboReturn.LeftElbow.Contraction, atual.RoboReturn.LeftElbow.Contraction);
            Assert.AreEqual(esperado.RoboReturn.RightElbow.Contraction, atual.RoboReturn.RightElbow.Contraction);
            Assert.AreEqual(esperado.RoboReturn.LeftPulse.Rotation, atual.RoboReturn.LeftPulse.Rotation);
            Assert.AreEqual(esperado.RoboReturn.RightPulse.Rotation, atual.RoboReturn.RightPulse.Rotation);
        }
        [TestMethod()]
        public void RoboApiControllerPost()
        {
            var repository = new FakeRepository();
            ReturnRobo esperado = new ReturnRobo();
            esperado.RoboReturn = repository.GetRobo();
            esperado.StatusReturn = true;
            esperado.MensageReturn = "Robo ok !!!";

            //Act
            var atual = _controller.PostRobo(repository.GetRobo());

            Assert.AreEqual(esperado.MensageReturn, atual.MensageReturn);
            Assert.AreEqual(esperado.StatusReturn, atual.StatusReturn);

            Assert.AreEqual(esperado.RoboReturn.Head.Inclination, atual.RoboReturn.Head.Inclination);
            Assert.AreEqual(esperado.RoboReturn.Head.Rotation, atual.RoboReturn.Head.Rotation);
            Assert.AreEqual(esperado.RoboReturn.LeftElbow.Contraction, atual.RoboReturn.LeftElbow.Contraction);
            Assert.AreEqual(esperado.RoboReturn.RightElbow.Contraction, atual.RoboReturn.RightElbow.Contraction);
            Assert.AreEqual(esperado.RoboReturn.LeftPulse.Rotation, atual.RoboReturn.LeftPulse.Rotation);
            Assert.AreEqual(esperado.RoboReturn.RightPulse.Rotation, atual.RoboReturn.RightPulse.Rotation);
        }
        [TestMethod()]
        public void RoboApiControllerPostNull()
        {
            var repository = new FakeRepository();
            ReturnRobo esperado = new ReturnRobo();
            esperado.RoboReturn = repository.GetRobo();
            esperado.StatusReturn = false;
            esperado.MensageReturn = "Não encontramos o Robo, Envie algo primeiro!!!";

            //Act
            var newRobo = new RoboApp();
            var atual = _controller.PostRobo(newRobo);

            Assert.AreEqual(esperado.MensageReturn, atual.MensageReturn);
            Assert.AreEqual(esperado.StatusReturn, atual.StatusReturn);

            Assert.AreEqual(esperado.RoboReturn.Head.Inclination, atual.RoboReturn.Head.Inclination);
            Assert.AreEqual(esperado.RoboReturn.Head.Rotation, atual.RoboReturn.Head.Rotation);
            Assert.AreEqual(esperado.RoboReturn.LeftElbow.Contraction, atual.RoboReturn.LeftElbow.Contraction);
            Assert.AreEqual(esperado.RoboReturn.RightElbow.Contraction, atual.RoboReturn.RightElbow.Contraction);
            Assert.AreEqual(esperado.RoboReturn.LeftPulse.Rotation, atual.RoboReturn.LeftPulse.Rotation);
            Assert.AreEqual(esperado.RoboReturn.RightPulse.Rotation, atual.RoboReturn.RightPulse.Rotation);
        }
        [TestMethod()]
        public void RoboApiControllerHead_1()
        {
            string mensage = "Ops, Cabeça quebrou !!!";
            bool veri = false;


            //Act
            Head head = new Head();
            head.Inclination = -2;
            var atual = _controller.HeadVerification(head);

            Assert.AreEqual(veri, atual.Item1);
            Assert.AreEqual(mensage, atual.Item2);
        }
        [TestMethod()]
        public void RoboApiControllerHead1()
        {
            string mensage = "Ops, Cabeça quebrou !!!";
            bool veri = false;


            //Act
            Head head = new Head();
            head.Inclination = 2;
            var atual = _controller.HeadVerification(head);

            Assert.AreEqual(veri, atual.Item1);
            Assert.AreEqual(mensage, atual.Item2);
        }
        [TestMethod()]
        public void RoboApiControllerHead_1_45()
        {
            string mensage = "Ops, Cabeça não pode estar para Baixo, e Rotacionada ao mesmo tempo !!!";
            bool veri = false;


            //Act
            Head head = new Head();
            head.Inclination = -1;
            head.Rotation = -45;
            var atual = _controller.HeadVerification(head);

            Assert.AreEqual(veri, atual.Item1);
            Assert.AreEqual(mensage, atual.Item2);
        }
        [TestMethod()]
        public void RoboApiControllerHead_0_135()
        {
            string mensage = "Ops, Cabeça rotacionou muito !!!";
            bool veri = false;


            //Act
            Head head = new Head();
            head.Inclination = 0;
            head.Rotation = 135;
            var atual = _controller.HeadVerification(head);

            Assert.AreEqual(veri, atual.Item1);
            Assert.AreEqual(mensage, atual.Item2);
        }
        [TestMethod()]
        public void RoboApiControllerHeadNull()
        {
            string mensage = "Ops, Robo sem cabeça !!!";
            bool veri = false;


            //Act
            Head head = new Head();
            head.Inclination = 0;
            head.Rotation = 135;
            var atual = _controller.HeadVerification(null);

            Assert.AreEqual(veri, atual.Item1);
            Assert.AreEqual(mensage, atual.Item2);
        }
    }
}