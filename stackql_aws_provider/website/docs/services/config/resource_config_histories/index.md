--- 
title: resource_config_histories
hide_title: false
hide_table_of_contents: false
keywords:
  - resource_config_histories
  - config
  - aws
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage aws resources using SQL
custom_edit_url: null
image: /img/stackql-aws-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists a <code>resource_config_histories</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="resource_config_histories" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.config.resource_config_histories" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_resource_config_history"
    values={[
        { label: 'get_resource_config_history', value: 'get_resource_config_history' }
    ]}
>
<TabItem value="get_resource_config_history">

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><CopyableCode code="account_id" /></td>
    <td><code>string</code></td>
    <td>The 12-digit Amazon Web Services account ID associated with the resource. (pattern: &lt;code&gt;\d&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>Amazon Resource Name (ARN) associated with the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="availability_zone" /></td>
    <td><code>string</code></td>
    <td>The Availability Zone associated with the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="aws_region" /></td>
    <td><code>string</code></td>
    <td>The region where the resource resides.</td>
</tr>
<tr>
    <td><CopyableCode code="configuration" /></td>
    <td><code>string</code></td>
    <td>A JSON-encoded string that contains the contents for the resource configuration. This string needs to be deserialized using json.loads() before you can access the contents.</td>
</tr>
<tr>
    <td><CopyableCode code="configuration_item_capture_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the recording of configuration changes was initiated for the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="configuration_item_delivery_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when configuration changes for the resource were delivered. This field is optional and is not guaranteed to be present in a configuration item (CI). If you are using daily recording, this field will be populated. However, if you are using continuous recording, this field will be omitted since the delivery time is instantaneous as the CI is available right away. For more information on daily recording and continuous recording, see Recording Frequency in the Config Developer Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="configuration_item_md5_hash" /></td>
    <td><code>string</code></td>
    <td>Unique MD5 hash that represents the configuration item's state. You can use MD5 hash to compare the states of two or more configuration items that are associated with the same resource.</td>
</tr>
<tr>
    <td><CopyableCode code="configuration_item_status" /></td>
    <td><code>string</code></td>
    <td>The configuration item status. Valid values include: OK – The resource configuration has been updated ResourceDiscovered – The resource was newly discovered ResourceNotRecorded – The resource was discovered but its configuration was not recorded since the recorder doesn't record resources of this type ResourceDeleted – The resource was deleted ResourceDeletedNotRecorded – The resource was deleted but its configuration was not recorded since the recorder doesn't record resources of this type (OK, ResourceDiscovered, ResourceNotRecorded, ResourceDeleted, ResourceDeletedNotRecorded)</td>
</tr>
<tr>
    <td><CopyableCode code="configuration_state_id" /></td>
    <td><code>string</code></td>
    <td>An identifier that indicates the ordering of the configuration items of a resource.</td>
</tr>
<tr>
    <td><CopyableCode code="recording_frequency" /></td>
    <td><code>string</code></td>
    <td>The recording frequency that Config uses to record configuration changes for the resource. This field only appears in the API response when DAILY recording is enabled for a resource type. If this field is not present, CONTINUOUS recording is enabled for that resource type. For more information on daily recording and continuous recording, see Recording Frequency in the Config Developer Guide. (CONTINUOUS, DAILY)</td>
</tr>
<tr>
    <td><CopyableCode code="related_events" /></td>
    <td><code>array</code></td>
    <td>A list of CloudTrail event IDs. A populated field indicates that the current configuration was initiated by the events recorded in the CloudTrail log. For more information about CloudTrail, see What Is CloudTrail. An empty field indicates that the current configuration was not initiated by any event. As of Version 1.3, the relatedEvents field is empty. You can access the LookupEvents API in the CloudTrail API Reference to retrieve the events for the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="relationships" /></td>
    <td><code>array</code></td>
    <td>A list of related Amazon Web Services resources.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time stamp when the resource was created.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the resource (for example, sg-xxxxxx).</td>
</tr>
<tr>
    <td><CopyableCode code="resource_name" /></td>
    <td><code>string</code></td>
    <td>The custom name of the resource, if available.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_type" /></td>
    <td><code>string</code></td>
    <td>The type of Amazon Web Services resource. (AWS::EC2::CustomerGateway, AWS::EC2::EIP, AWS::EC2::Host, AWS::EC2::Instance, AWS::EC2::InternetGateway, AWS::EC2::NetworkAcl, AWS::EC2::NetworkInterface, AWS::EC2::RouteTable, AWS::EC2::SecurityGroup, AWS::EC2::Subnet, AWS::CloudTrail::Trail, AWS::EC2::Volume, AWS::EC2::VPC, AWS::EC2::VPNConnection, AWS::EC2::VPNGateway, AWS::EC2::RegisteredHAInstance, AWS::EC2::NatGateway, AWS::EC2::EgressOnlyInternetGateway, AWS::EC2::VPCEndpoint, AWS::EC2::VPCEndpointService, AWS::EC2::FlowLog, AWS::EC2::VPCPeeringConnection, AWS::Elasticsearch::Domain, AWS::IAM::Group, AWS::IAM::Policy, AWS::IAM::Role, AWS::IAM::User, AWS::ElasticLoadBalancingV2::LoadBalancer, AWS::ACM::Certificate, AWS::RDS::DBInstance, AWS::RDS::DBSubnetGroup, AWS::RDS::DBSecurityGroup, AWS::RDS::DBSnapshot, AWS::RDS::DBCluster, AWS::RDS::DBClusterSnapshot, AWS::RDS::EventSubscription, AWS::S3::Bucket, AWS::S3::AccountPublicAccessBlock, AWS::Redshift::Cluster, AWS::Redshift::ClusterSnapshot, AWS::Redshift::ClusterParameterGroup, AWS::Redshift::ClusterSecurityGroup, AWS::Redshift::ClusterSubnetGroup, AWS::Redshift::EventSubscription, AWS::SSM::ManagedInstanceInventory, AWS::CloudWatch::Alarm, AWS::CloudFormation::Stack, AWS::ElasticLoadBalancing::LoadBalancer, AWS::AutoScaling::AutoScalingGroup, AWS::AutoScaling::LaunchConfiguration, AWS::AutoScaling::ScalingPolicy, AWS::AutoScaling::ScheduledAction, AWS::DynamoDB::Table, AWS::CodeBuild::Project, AWS::WAF::RateBasedRule, AWS::WAF::Rule, AWS::WAF::RuleGroup, AWS::WAF::WebACL, AWS::WAFRegional::RateBasedRule, AWS::WAFRegional::Rule, AWS::WAFRegional::RuleGroup, AWS::WAFRegional::WebACL, AWS::CloudFront::Distribution, AWS::CloudFront::StreamingDistribution, AWS::Lambda::Function, AWS::NetworkFirewall::Firewall, AWS::NetworkFirewall::FirewallPolicy, AWS::NetworkFirewall::RuleGroup, AWS::ElasticBeanstalk::Application, AWS::ElasticBeanstalk::ApplicationVersion, AWS::ElasticBeanstalk::Environment, AWS::WAFv2::WebACL, AWS::WAFv2::RuleGroup, AWS::WAFv2::IPSet, AWS::WAFv2::RegexPatternSet, AWS::WAFv2::ManagedRuleSet, AWS::XRay::EncryptionConfig, AWS::SSM::AssociationCompliance, AWS::SSM::PatchCompliance, AWS::Shield::Protection, AWS::ShieldRegional::Protection, AWS::Config::ConformancePackCompliance, AWS::Config::ResourceCompliance, AWS::ApiGateway::Stage, AWS::ApiGateway::RestApi, AWS::ApiGatewayV2::Stage, AWS::ApiGatewayV2::Api, AWS::CodePipeline::Pipeline, AWS::ServiceCatalog::CloudFormationProvisionedProduct, AWS::ServiceCatalog::CloudFormationProduct, AWS::ServiceCatalog::Portfolio, AWS::SQS::Queue, AWS::KMS::Key, AWS::QLDB::Ledger, AWS::SecretsManager::Secret, AWS::SNS::Topic, AWS::SSM::FileData, AWS::Backup::BackupPlan, AWS::Backup::BackupSelection, AWS::Backup::BackupVault, AWS::Backup::RecoveryPoint, AWS::ECR::Repository, AWS::ECS::Cluster, AWS::ECS::Service, AWS::ECS::TaskDefinition, AWS::EFS::AccessPoint, AWS::EFS::FileSystem, AWS::EKS::Cluster, AWS::OpenSearch::Domain, AWS::EC2::TransitGateway, AWS::Kinesis::Stream, AWS::Kinesis::StreamConsumer, AWS::CodeDeploy::Application, AWS::CodeDeploy::DeploymentConfig, AWS::CodeDeploy::DeploymentGroup, AWS::EC2::LaunchTemplate, AWS::ECR::PublicRepository, AWS::GuardDuty::Detector, AWS::EMR::SecurityConfiguration, AWS::SageMaker::CodeRepository, AWS::Route53Resolver::ResolverEndpoint, AWS::Route53Resolver::ResolverRule, AWS::Route53Resolver::ResolverRuleAssociation, AWS::DMS::ReplicationSubnetGroup, AWS::DMS::EventSubscription, AWS::MSK::Cluster, AWS::StepFunctions::Activity, AWS::WorkSpaces::Workspace, AWS::WorkSpaces::ConnectionAlias, AWS::SageMaker::Model, AWS::ElasticLoadBalancingV2::Listener, AWS::StepFunctions::StateMachine, AWS::Batch::JobQueue, AWS::Batch::ComputeEnvironment, AWS::AccessAnalyzer::Analyzer, AWS::Athena::WorkGroup, AWS::Athena::DataCatalog, AWS::Detective::Graph, AWS::GlobalAccelerator::Accelerator, AWS::GlobalAccelerator::EndpointGroup, AWS::GlobalAccelerator::Listener, AWS::EC2::TransitGatewayAttachment, AWS::EC2::TransitGatewayRouteTable, AWS::DMS::Certificate, AWS::AppConfig::Application, AWS::AppSync::GraphQLApi, AWS::DataSync::LocationSMB, AWS::DataSync::LocationFSxLustre, AWS::DataSync::LocationS3, AWS::DataSync::LocationEFS, AWS::DataSync::Task, AWS::DataSync::LocationNFS, AWS::EC2::NetworkInsightsAccessScopeAnalysis, AWS::EKS::FargateProfile, AWS::Glue::Job, AWS::GuardDuty::ThreatIntelSet, AWS::GuardDuty::IPSet, AWS::SageMaker::Workteam, AWS::SageMaker::NotebookInstanceLifecycleConfig, AWS::ServiceDiscovery::Service, AWS::ServiceDiscovery::PublicDnsNamespace, AWS::SES::ContactList, AWS::SES::ConfigurationSet, AWS::Route53::HostedZone, AWS::IoTEvents::Input, AWS::IoTEvents::DetectorModel, AWS::IoTEvents::AlarmModel, AWS::ServiceDiscovery::HttpNamespace, AWS::Events::EventBus, AWS::ImageBuilder::ContainerRecipe, AWS::ImageBuilder::DistributionConfiguration, AWS::ImageBuilder::InfrastructureConfiguration, AWS::DataSync::LocationObjectStorage, AWS::DataSync::LocationHDFS, AWS::Glue::Classifier, AWS::Route53RecoveryReadiness::Cell, AWS::Route53RecoveryReadiness::ReadinessCheck, AWS::ECR::RegistryPolicy, AWS::Backup::ReportPlan, AWS::Lightsail::Certificate, AWS::RUM::AppMonitor, AWS::Events::Endpoint, AWS::SES::ReceiptRuleSet, AWS::Events::Archive, AWS::Events::ApiDestination, AWS::Lightsail::Disk, AWS::FIS::ExperimentTemplate, AWS::DataSync::LocationFSxWindows, AWS::SES::ReceiptFilter, AWS::GuardDuty::Filter, AWS::SES::Template, AWS::AmazonMQ::Broker, AWS::AppConfig::Environment, AWS::AppConfig::ConfigurationProfile, AWS::Cloud9::EnvironmentEC2, AWS::EventSchemas::Registry, AWS::EventSchemas::RegistryPolicy, AWS::EventSchemas::Discoverer, AWS::FraudDetector::Label, AWS::FraudDetector::EntityType, AWS::FraudDetector::Variable, AWS::FraudDetector::Outcome, AWS::IoT::Authorizer, AWS::IoT::SecurityProfile, AWS::IoT::RoleAlias, AWS::IoT::Dimension, AWS::IoTAnalytics::Datastore, AWS::Lightsail::Bucket, AWS::Lightsail::StaticIp, AWS::MediaPackage::PackagingGroup, AWS::Route53RecoveryReadiness::RecoveryGroup, AWS::ResilienceHub::ResiliencyPolicy, AWS::Transfer::Workflow, AWS::EKS::IdentityProviderConfig, AWS::EKS::Addon, AWS::Glue::MLTransform, AWS::IoT::Policy, AWS::IoT::MitigationAction, AWS::IoTTwinMaker::Workspace, AWS::IoTTwinMaker::Entity, AWS::IoTAnalytics::Dataset, AWS::IoTAnalytics::Pipeline, AWS::IoTAnalytics::Channel, AWS::IoTSiteWise::Dashboard, AWS::IoTSiteWise::Project, AWS::IoTSiteWise::Portal, AWS::IoTSiteWise::AssetModel, AWS::IVS::Channel, AWS::IVS::RecordingConfiguration, AWS::IVS::PlaybackKeyPair, AWS::KinesisAnalyticsV2::Application, AWS::RDS::GlobalCluster, AWS::S3::MultiRegionAccessPoint, AWS::DeviceFarm::TestGridProject, AWS::Budgets::BudgetsAction, AWS::Lex::Bot, AWS::CodeGuruReviewer::RepositoryAssociation, AWS::IoT::CustomMetric, AWS::Route53Resolver::FirewallDomainList, AWS::RoboMaker::RobotApplicationVersion, AWS::EC2::TrafficMirrorSession, AWS::IoTSiteWise::Gateway, AWS::Lex::BotAlias, AWS::LookoutMetrics::Alert, AWS::IoT::AccountAuditConfiguration, AWS::EC2::TrafficMirrorTarget, AWS::S3::StorageLens, AWS::IoT::ScheduledAudit, AWS::Events::Connection, AWS::EventSchemas::Schema, AWS::MediaPackage::PackagingConfiguration, AWS::KinesisVideo::SignalingChannel, AWS::AppStream::DirectoryConfig, AWS::LookoutVision::Project, AWS::Route53RecoveryControl::Cluster, AWS::Route53RecoveryControl::SafetyRule, AWS::Route53RecoveryControl::ControlPanel, AWS::Route53RecoveryControl::RoutingControl, AWS::Route53RecoveryReadiness::ResourceSet, AWS::RoboMaker::SimulationApplication, AWS::RoboMaker::RobotApplication, AWS::HealthLake::FHIRDatastore, AWS::Pinpoint::Segment, AWS::Pinpoint::ApplicationSettings, AWS::Events::Rule, AWS::EC2::DHCPOptions, AWS::EC2::NetworkInsightsPath, AWS::EC2::TrafficMirrorFilter, AWS::EC2::IPAM, AWS::IoTTwinMaker::Scene, AWS::NetworkManager::TransitGatewayRegistration, AWS::CustomerProfiles::Domain, AWS::AutoScaling::WarmPool, AWS::Connect::PhoneNumber, AWS::AppConfig::DeploymentStrategy, AWS::AppFlow::Flow, AWS::AuditManager::Assessment, AWS::CloudWatch::MetricStream, AWS::DeviceFarm::InstanceProfile, AWS::DeviceFarm::Project, AWS::EC2::EC2Fleet, AWS::EC2::SubnetRouteTableAssociation, AWS::ECR::PullThroughCacheRule, AWS::GroundStation::Config, AWS::ImageBuilder::ImagePipeline, AWS::IoT::FleetMetric, AWS::IoTWireless::ServiceProfile, AWS::NetworkManager::Device, AWS::NetworkManager::GlobalNetwork, AWS::NetworkManager::Link, AWS::NetworkManager::Site, AWS::Panorama::Package, AWS::Pinpoint::App, AWS::Redshift::ScheduledAction, AWS::Route53Resolver::FirewallRuleGroupAssociation, AWS::SageMaker::AppImageConfig, AWS::SageMaker::Image, AWS::ECS::TaskSet, AWS::Cassandra::Keyspace, AWS::Signer::SigningProfile, AWS::Amplify::App, AWS::AppMesh::VirtualNode, AWS::AppMesh::VirtualService, AWS::AppRunner::VpcConnector, AWS::AppStream::Application, AWS::CodeArtifact::Repository, AWS::EC2::PrefixList, AWS::EC2::SpotFleet, AWS::Evidently::Project, AWS::Forecast::Dataset, AWS::IAM::SAMLProvider, AWS::IAM::ServerCertificate, AWS::Pinpoint::Campaign, AWS::Pinpoint::InAppTemplate, AWS::SageMaker::Domain, AWS::Transfer::Agreement, AWS::Transfer::Connector, AWS::KinesisFirehose::DeliveryStream, AWS::Amplify::Branch, AWS::AppIntegrations::EventIntegration, AWS::AppMesh::Route, AWS::Athena::PreparedStatement, AWS::EC2::IPAMScope, AWS::Evidently::Launch, AWS::Forecast::DatasetGroup, AWS::GreengrassV2::ComponentVersion, AWS::GroundStation::MissionProfile, AWS::MediaConnect::FlowEntitlement, AWS::MediaConnect::FlowVpcInterface, AWS::MediaTailor::PlaybackConfiguration, AWS::MSK::Configuration, AWS::Personalize::Dataset, AWS::Personalize::Schema, AWS::Personalize::Solution, AWS::Pinpoint::EmailTemplate, AWS::Pinpoint::EventStream, AWS::ResilienceHub::App, AWS::ACMPCA::CertificateAuthority, AWS::AppConfig::HostedConfigurationVersion, AWS::AppMesh::VirtualGateway, AWS::AppMesh::VirtualRouter, AWS::AppRunner::Service, AWS::CustomerProfiles::ObjectType, AWS::DMS::Endpoint, AWS::EC2::CapacityReservation, AWS::EC2::ClientVpnEndpoint, AWS::Kendra::Index, AWS::KinesisVideo::Stream, AWS::Logs::Destination, AWS::Pinpoint::EmailChannel, AWS::S3::AccessPoint, AWS::NetworkManager::CustomerGatewayAssociation, AWS::NetworkManager::LinkAssociation, AWS::IoTWireless::MulticastGroup, AWS::Personalize::DatasetGroup, AWS::IoTTwinMaker::ComponentType, AWS::CodeBuild::ReportGroup, AWS::SageMaker::FeatureGroup, AWS::MSK::BatchScramSecret, AWS::AppStream::Stack, AWS::IoT::JobTemplate, AWS::IoTWireless::FuotaTask, AWS::IoT::ProvisioningTemplate, AWS::InspectorV2::Filter, AWS::Route53Resolver::ResolverQueryLoggingConfigAssociation, AWS::ServiceDiscovery::Instance, AWS::Transfer::Certificate, AWS::MediaConnect::FlowSource, AWS::APS::RuleGroupsNamespace, AWS::CodeGuruProfiler::ProfilingGroup, AWS::Route53Resolver::ResolverQueryLoggingConfig, AWS::Batch::SchedulingPolicy, AWS::ACMPCA::CertificateAuthorityActivation, AWS::AppMesh::GatewayRoute, AWS::AppMesh::Mesh, AWS::Connect::Instance, AWS::Connect::QuickConnect, AWS::EC2::CarrierGateway, AWS::EC2::IPAMPool, AWS::EC2::TransitGatewayConnect, AWS::EC2::TransitGatewayMulticastDomain, AWS::ECS::CapacityProvider, AWS::IAM::InstanceProfile, AWS::IoT::CACertificate, AWS::IoTTwinMaker::SyncJob, AWS::KafkaConnect::Connector, AWS::Lambda::CodeSigningConfig, AWS::NetworkManager::ConnectPeer, AWS::ResourceExplorer2::Index, AWS::AppStream::Fleet, AWS::Cognito::UserPool, AWS::Cognito::UserPoolClient, AWS::Cognito::UserPoolGroup, AWS::EC2::NetworkInsightsAccessScope, AWS::EC2::NetworkInsightsAnalysis, AWS::Grafana::Workspace, AWS::GroundStation::DataflowEndpointGroup, AWS::ImageBuilder::ImageRecipe, AWS::KMS::Alias, AWS::M2::Environment, AWS::QuickSight::DataSource, AWS::QuickSight::Template, AWS::QuickSight::Theme, AWS::RDS::OptionGroup, AWS::Redshift::EndpointAccess, AWS::Route53Resolver::FirewallRuleGroup, AWS::SSM::Document, AWS::AppConfig::ExtensionAssociation, AWS::AppIntegrations::Application, AWS::AppSync::ApiCache, AWS::Bedrock::Guardrail, AWS::Bedrock::KnowledgeBase, AWS::Cognito::IdentityPool, AWS::Connect::Rule, AWS::Connect::User, AWS::EC2::ClientVpnTargetNetworkAssociation, AWS::EC2::EIPAssociation, AWS::EC2::IPAMResourceDiscovery, AWS::EC2::IPAMResourceDiscoveryAssociation, AWS::EC2::InstanceConnectEndpoint, AWS::EC2::SnapshotBlockPublicAccess, AWS::EC2::VPCBlockPublicAccessExclusion, AWS::EC2::VPCBlockPublicAccessOptions, AWS::EC2::VPCEndpointConnectionNotification, AWS::EC2::VPNConnectionRoute, AWS::Evidently::Segment, AWS::IAM::OIDCProvider, AWS::InspectorV2::Activation, AWS::MSK::ClusterPolicy, AWS::MSK::VpcConnection, AWS::MediaConnect::Gateway, AWS::MemoryDB::SubnetGroup, AWS::OpenSearchServerless::Collection, AWS::OpenSearchServerless::VpcEndpoint, AWS::Redshift::EndpointAuthorization, AWS::Route53Profiles::Profile, AWS::S3::StorageLensGroup, AWS::S3Express::BucketPolicy, AWS::S3Express::DirectoryBucket, AWS::SageMaker::InferenceExperiment, AWS::SecurityHub::Standard, AWS::Transfer::Profile, AWS::CloudFormation::StackSet, AWS::MediaPackageV2::Channel, AWS::S3::AccessGrantsLocation, AWS::S3::AccessGrant, AWS::S3::AccessGrantsInstance, AWS::EMRServerless::Application, AWS::Config::AggregationAuthorization, AWS::Bedrock::ApplicationInferenceProfile, AWS::ApiGatewayV2::Integration, AWS::SageMaker::MlflowTrackingServer, AWS::SageMaker::ModelBiasJobDefinition, AWS::SecretsManager::RotationSchedule, AWS::Deadline::QueueFleetAssociation, AWS::ECR::RepositoryCreationTemplate, AWS::CloudFormation::LambdaHook, AWS::EC2::SubnetNetworkAclAssociation, AWS::ApiGateway::UsagePlan, AWS::AppConfig::Extension, AWS::Deadline::Fleet, AWS::EMR::Studio, AWS::S3Tables::TableBucket, AWS::CloudFront::RealtimeLogConfig, AWS::BackupGateway::Hypervisor, AWS::BCMDataExports::Export, AWS::CloudFormation::GuardHook, AWS::CloudFront::PublicKey, AWS::CloudTrail::EventDataStore, AWS::EntityResolution::IdMappingWorkflow, AWS::EntityResolution::SchemaMapping, AWS::IoT::DomainConfiguration, AWS::PCAConnectorAD::DirectoryRegistration, AWS::RDS::Integration, AWS::Config::ConformancePack, AWS::RolesAnywhere::Profile, AWS::CodeArtifact::Domain, AWS::Backup::RestoreTestingPlan, AWS::Config::StoredQuery, AWS::SageMaker::DataQualityJobDefinition, AWS::SageMaker::ModelExplainabilityJobDefinition, AWS::SageMaker::ModelQualityJobDefinition, AWS::SageMaker::StudioLifecycleConfig, AWS::SES::DedicatedIpPool, AWS::SES::MailManagerTrafficPolicy, AWS::SSM::ResourceDataSync, AWS::BedrockAgentCore::Runtime, AWS::BedrockAgentCore::BrowserCustom, AWS::ElasticLoadBalancingV2::TargetGroup, AWS::EMRContainers::VirtualCluster, AWS::EntityResolution::MatchingWorkflow, AWS::IoTCoreDeviceAdvisor::SuiteDefinition, AWS::EC2::SecurityGroupVpcAssociation, AWS::EC2::VerifiedAccessInstance, AWS::KafkaConnect::CustomPlugin, AWS::NetworkManager::TransitGatewayPeering, AWS::OpenSearchServerless::SecurityConfig, AWS::Redshift::Integration, AWS::RolesAnywhere::TrustAnchor, AWS::Route53Profiles::ProfileAssociation, AWS::SSMIncidents::ResponsePlan, AWS::Transfer::Server, AWS::Glue::Database, AWS::Organizations::OrganizationalUnit, AWS::EC2::IPAMPoolCidr, AWS::EC2::VPCGatewayAttachment, AWS::Bedrock::Prompt, AWS::Comprehend::Flywheel, AWS::DataSync::Agent, AWS::MediaTailor::LiveSource, AWS::MSK::ServerlessCluster, AWS::IoTSiteWise::Asset, AWS::B2BI::Capability, AWS::CloudFront::KeyValueStore, AWS::Deadline::Monitor, AWS::GuardDuty::MalwareProtectionPlan, AWS::Location::APIKey, AWS::MediaPackageV2::OriginEndpoint, AWS::PCAConnectorAD::Connector, AWS::S3Tables::TableBucketPolicy, AWS::SecretsManager::ResourcePolicy, AWS::SSMContacts::Contact, AWS::IoT::ThingGroup, AWS::ImageBuilder::LifecyclePolicy, AWS::GameLift::Build, AWS::ECR::ReplicationConfiguration, AWS::EC2::SubnetCidrBlock, AWS::Connect::SecurityProfile, AWS::CleanRoomsML::TrainingDataset, AWS::AppStream::AppBlockBuilder, AWS::Route53::DNSSEC, AWS::SageMaker::UserProfile, AWS::ApiGateway::Method)</td>
</tr>
<tr>
    <td><CopyableCode code="supplementary_configuration" /></td>
    <td><code>object</code></td>
    <td>A string to string map that contains additional contents for the resource configuration.Config returns this field for certain resource types to supplement the information returned for the configuration field. This string to string map needs to be deserialized using json.loads() before you can accessing the contents.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>A mapping of key value tags associated with the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>The version number of the resource configuration.</td>
</tr>
</tbody>
</table>
</TabItem>
</Tabs>

## Methods

The following methods are available for this resource:

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Accessible by</th>
    <th>Required Params</th>
    <th>Optional Params</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><a href="#get_resource_config_history"><CopyableCode code="get_resource_config_history" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>For accurate reporting on the compliance status, you must record the AWS::Config::ResourceCompliance resource type. For more information, see Recording Amazon Web Services Resources in the Config Resources Developer Guide. Returns a list of configurations items (CIs) for the specified resource. Contents The list contains details about each state of the resource during the specified time interval. If you specified a retention period to retain your CIs between a minimum of 30 days and a maximum of 7 years (2557 days), Config returns the CIs for the specified retention period. Pagination The response is paginated. By default, Config returns a limit of 10 configuration items per page. You can customize this number with the limit parameter. The response includes a nextToken string. To get the next page of results, run the request again and specify the string for the nextToken parameter. Each call to the API is limited to span a duration of seven days. It is likely that the number of records returned is smaller than the specified limit. In such cases, you can make another call, using the nextToken.</td>
</tr>
</tbody>
</table>

## Parameters

Parameters can be passed in the `WHERE` clause of a query. Check the [Methods](#methods) section to see which parameters are required or optional for each operation.

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_resource_config_history"
    values={[
        { label: 'get_resource_config_history', value: 'get_resource_config_history' }
    ]}
>
<TabItem value="get_resource_config_history">

For accurate reporting on the compliance status, you must record the AWS::Config::ResourceCompliance resource type. For more information, see Recording Amazon Web Services Resources in the Config Resources Developer Guide. Returns a list of configurations items (CIs) for the specified resource. Contents The list contains details about each state of the resource during the specified time interval. If you specified a retention period to retain your CIs between a minimum of 30 days and a maximum of 7 years (2557 days), Config returns the CIs for the specified retention period. Pagination The response is paginated. By default, Config returns a limit of 10 configuration items per page. You can customize this number with the limit parameter. The response includes a nextToken string. To get the next page of results, run the request again and specify the string for the nextToken parameter. Each call to the API is limited to span a duration of seven days. It is likely that the number of records returned is smaller than the specified limit. In such cases, you can make another call, using the nextToken.

```sql
SELECT
account_id,
arn,
availability_zone,
aws_region,
configuration,
configuration_item_capture_time,
configuration_item_delivery_time,
configuration_item_md5_hash,
configuration_item_status,
configuration_state_id,
recording_frequency,
related_events,
relationships,
resource_creation_time,
resource_id,
resource_name,
resource_type,
supplementary_configuration,
tags,
version
FROM aws.config.resource_config_histories
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
