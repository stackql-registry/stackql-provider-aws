---
title: aws
hide_title: false
hide_table_of_contents: false
keywords:
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/stackql-aws-provider-featured-image.png
id: 'provider-intro'
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';

AWS native API provider for StackQL.  

:::info

For the AWS Cloud Control provider see the [__`awscc`__](https://awscc-provider.stackql.io/) provider.

:::

:::info[Provider Summary] 

total services: __413__  
total resources: __6398__  

:::

## Authentication

This provider uses AWS credentials for authentication. Configure your credentials using one of the following methods:

- Environment variables: `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY`
- AWS credentials file: `~/.aws/credentials`
- IAM roles for EC2 instances
- AWS STS temporary credentials

For more information on AWS authentication, see the [AWS documentation](https://docs.aws.amazon.com/sdk-for-java/v1/developer-guide/credentials.html).

## Regions

Resources are available in all AWS regions. Use the `region` parameter to specify the target region for your operations.

## Services
<div class="row">
<div class="providerDocColumn">
<a href="/services/accessanalyzer/">accessanalyzer</a><br />
<a href="/services/account/">account</a><br />
<a href="/services/acm/">acm</a><br />
<a href="/services/acm_pca/">acm_pca</a><br />
<a href="/services/aiops/">aiops</a><br />
<a href="/services/amp/">amp</a><br />
<a href="/services/amplify/">amplify</a><br />
<a href="/services/amplifybackend/">amplifybackend</a><br />
<a href="/services/amplifyuibuilder/">amplifyuibuilder</a><br />
<a href="/services/apigateway/">apigateway</a><br />
<a href="/services/apigatewaymanagementapi/">apigatewaymanagementapi</a><br />
<a href="/services/apigatewayv2/">apigatewayv2</a><br />
<a href="/services/appconfig/">appconfig</a><br />
<a href="/services/appconfigdata/">appconfigdata</a><br />
<a href="/services/appfabric/">appfabric</a><br />
<a href="/services/appflow/">appflow</a><br />
<a href="/services/appintegrations/">appintegrations</a><br />
<a href="/services/application_autoscaling/">application_autoscaling</a><br />
<a href="/services/application_insights/">application_insights</a><br />
<a href="/services/application_signals/">application_signals</a><br />
<a href="/services/applicationcostprofiler/">applicationcostprofiler</a><br />
<a href="/services/appmesh/">appmesh</a><br />
<a href="/services/apprunner/">apprunner</a><br />
<a href="/services/appstream/">appstream</a><br />
<a href="/services/appsync/">appsync</a><br />
<a href="/services/arc_region_switch/">arc_region_switch</a><br />
<a href="/services/arc_zonal_shift/">arc_zonal_shift</a><br />
<a href="/services/artifact/">artifact</a><br />
<a href="/services/athena/">athena</a><br />
<a href="/services/auditmanager/">auditmanager</a><br />
<a href="/services/autoscaling/">autoscaling</a><br />
<a href="/services/autoscaling_plans/">autoscaling_plans</a><br />
<a href="/services/b2bi/">b2bi</a><br />
<a href="/services/backup/">backup</a><br />
<a href="/services/backup_gateway/">backup_gateway</a><br />
<a href="/services/backupsearch/">backupsearch</a><br />
<a href="/services/batch/">batch</a><br />
<a href="/services/bcm_dashboards/">bcm_dashboards</a><br />
<a href="/services/bcm_data_exports/">bcm_data_exports</a><br />
<a href="/services/bcm_pricing_calculator/">bcm_pricing_calculator</a><br />
<a href="/services/bcm_recommended_actions/">bcm_recommended_actions</a><br />
<a href="/services/bedrock/">bedrock</a><br />
<a href="/services/bedrock_agent/">bedrock_agent</a><br />
<a href="/services/bedrock_agent_runtime/">bedrock_agent_runtime</a><br />
<a href="/services/bedrock_agentcore/">bedrock_agentcore</a><br />
<a href="/services/bedrock_agentcore_control/">bedrock_agentcore_control</a><br />
<a href="/services/bedrock_data_automation/">bedrock_data_automation</a><br />
<a href="/services/bedrock_data_automation_runtime/">bedrock_data_automation_runtime</a><br />
<a href="/services/bedrock_runtime/">bedrock_runtime</a><br />
<a href="/services/billing/">billing</a><br />
<a href="/services/billingconductor/">billingconductor</a><br />
<a href="/services/braket/">braket</a><br />
<a href="/services/budgets/">budgets</a><br />
<a href="/services/ce/">ce</a><br />
<a href="/services/chatbot/">chatbot</a><br />
<a href="/services/chime/">chime</a><br />
<a href="/services/chime_sdk_identity/">chime_sdk_identity</a><br />
<a href="/services/chime_sdk_media_pipelines/">chime_sdk_media_pipelines</a><br />
<a href="/services/chime_sdk_meetings/">chime_sdk_meetings</a><br />
<a href="/services/chime_sdk_messaging/">chime_sdk_messaging</a><br />
<a href="/services/chime_sdk_voice/">chime_sdk_voice</a><br />
<a href="/services/cleanrooms/">cleanrooms</a><br />
<a href="/services/cleanroomsml/">cleanroomsml</a><br />
<a href="/services/cloud9/">cloud9</a><br />
<a href="/services/cloudcontrol/">cloudcontrol</a><br />
<a href="/services/clouddirectory/">clouddirectory</a><br />
<a href="/services/cloudformation/">cloudformation</a><br />
<a href="/services/cloudfront/">cloudfront</a><br />
<a href="/services/cloudfront_keyvaluestore/">cloudfront_keyvaluestore</a><br />
<a href="/services/cloudhsm/">cloudhsm</a><br />
<a href="/services/cloudhsmv2/">cloudhsmv2</a><br />
<a href="/services/cloudsearch/">cloudsearch</a><br />
<a href="/services/cloudtrail/">cloudtrail</a><br />
<a href="/services/cloudtrail_data/">cloudtrail_data</a><br />
<a href="/services/cloudwatch/">cloudwatch</a><br />
<a href="/services/codeartifact/">codeartifact</a><br />
<a href="/services/codebuild/">codebuild</a><br />
<a href="/services/codecatalyst/">codecatalyst</a><br />
<a href="/services/codecommit/">codecommit</a><br />
<a href="/services/codeconnections/">codeconnections</a><br />
<a href="/services/codedeploy/">codedeploy</a><br />
<a href="/services/codeguru_reviewer/">codeguru_reviewer</a><br />
<a href="/services/codeguru_security/">codeguru_security</a><br />
<a href="/services/codeguruprofiler/">codeguruprofiler</a><br />
<a href="/services/codepipeline/">codepipeline</a><br />
<a href="/services/codestar_connections/">codestar_connections</a><br />
<a href="/services/codestar_notifications/">codestar_notifications</a><br />
<a href="/services/cognito_identity/">cognito_identity</a><br />
<a href="/services/cognito_idp/">cognito_idp</a><br />
<a href="/services/cognito_sync/">cognito_sync</a><br />
<a href="/services/comprehend/">comprehend</a><br />
<a href="/services/comprehendmedical/">comprehendmedical</a><br />
<a href="/services/compute_optimizer/">compute_optimizer</a><br />
<a href="/services/compute_optimizer_automation/">compute_optimizer_automation</a><br />
<a href="/services/config/">config</a><br />
<a href="/services/connect/">connect</a><br />
<a href="/services/connect_contact_lens/">connect_contact_lens</a><br />
<a href="/services/connectcampaigns/">connectcampaigns</a><br />
<a href="/services/connectcampaignsv2/">connectcampaignsv2</a><br />
<a href="/services/connectcases/">connectcases</a><br />
<a href="/services/connecthealth/">connecthealth</a><br />
<a href="/services/connectparticipant/">connectparticipant</a><br />
<a href="/services/controlcatalog/">controlcatalog</a><br />
<a href="/services/controltower/">controltower</a><br />
<a href="/services/cost_optimization_hub/">cost_optimization_hub</a><br />
<a href="/services/cur/">cur</a><br />
<a href="/services/customer_profiles/">customer_profiles</a><br />
<a href="/services/databrew/">databrew</a><br />
<a href="/services/dataexchange/">dataexchange</a><br />
<a href="/services/datapipeline/">datapipeline</a><br />
<a href="/services/datasync/">datasync</a><br />
<a href="/services/datazone/">datazone</a><br />
<a href="/services/dax/">dax</a><br />
<a href="/services/deadline/">deadline</a><br />
<a href="/services/detective/">detective</a><br />
<a href="/services/devicefarm/">devicefarm</a><br />
<a href="/services/devops_agent/">devops_agent</a><br />
<a href="/services/devops_guru/">devops_guru</a><br />
<a href="/services/directconnect/">directconnect</a><br />
<a href="/services/discovery/">discovery</a><br />
<a href="/services/dlm/">dlm</a><br />
<a href="/services/dms/">dms</a><br />
<a href="/services/docdb/">docdb</a><br />
<a href="/services/docdb_elastic/">docdb_elastic</a><br />
<a href="/services/drs/">drs</a><br />
<a href="/services/ds/">ds</a><br />
<a href="/services/ds_data/">ds_data</a><br />
<a href="/services/dsql/">dsql</a><br />
<a href="/services/dynamodb/">dynamodb</a><br />
<a href="/services/dynamodbstreams/">dynamodbstreams</a><br />
<a href="/services/ebs/">ebs</a><br />
<a href="/services/ec2/">ec2</a><br />
<a href="/services/ecr/">ecr</a><br />
<a href="/services/ecr_public/">ecr_public</a><br />
<a href="/services/ecs/">ecs</a><br />
<a href="/services/efs/">efs</a><br />
<a href="/services/eks/">eks</a><br />
<a href="/services/elasticache/">elasticache</a><br />
<a href="/services/elasticbeanstalk/">elasticbeanstalk</a><br />
<a href="/services/elb/">elb</a><br />
<a href="/services/elbv2/">elbv2</a><br />
<a href="/services/elementalinference/">elementalinference</a><br />
<a href="/services/emr/">emr</a><br />
<a href="/services/emr_containers/">emr_containers</a><br />
<a href="/services/emr_serverless/">emr_serverless</a><br />
<a href="/services/entityresolution/">entityresolution</a><br />
<a href="/services/es/">es</a><br />
<a href="/services/events/">events</a><br />
<a href="/services/evs/">evs</a><br />
<a href="/services/finspace/">finspace</a><br />
<a href="/services/finspace_data/">finspace_data</a><br />
<a href="/services/firehose/">firehose</a><br />
<a href="/services/fis/">fis</a><br />
<a href="/services/fms/">fms</a><br />
<a href="/services/forecast/">forecast</a><br />
<a href="/services/frauddetector/">frauddetector</a><br />
<a href="/services/freetier/">freetier</a><br />
<a href="/services/fsx/">fsx</a><br />
<a href="/services/gamelift/">gamelift</a><br />
<a href="/services/gameliftstreams/">gameliftstreams</a><br />
<a href="/services/geo_maps/">geo_maps</a><br />
<a href="/services/geo_places/">geo_places</a><br />
<a href="/services/glacier/">glacier</a><br />
<a href="/services/globalaccelerator/">globalaccelerator</a><br />
<a href="/services/glue/">glue</a><br />
<a href="/services/grafana/">grafana</a><br />
<a href="/services/greengrass/">greengrass</a><br />
<a href="/services/greengrassv2/">greengrassv2</a><br />
<a href="/services/groundstation/">groundstation</a><br />
<a href="/services/guardduty/">guardduty</a><br />
<a href="/services/health/">health</a><br />
<a href="/services/healthlake/">healthlake</a><br />
<a href="/services/iam/">iam</a><br />
<a href="/services/identitystore/">identitystore</a><br />
<a href="/services/imagebuilder/">imagebuilder</a><br />
<a href="/services/importexport/">importexport</a><br />
<a href="/services/inspector/">inspector</a><br />
<a href="/services/inspector2/">inspector2</a><br />
<a href="/services/interconnect/">interconnect</a><br />
<a href="/services/internetmonitor/">internetmonitor</a><br />
<a href="/services/invoicing/">invoicing</a><br />
<a href="/services/iot/">iot</a><br />
<a href="/services/iot_data/">iot_data</a><br />
<a href="/services/iot_jobs_data/">iot_jobs_data</a><br />
<a href="/services/iot_managed_integrations/">iot_managed_integrations</a><br />
<a href="/services/iotdeviceadvisor/">iotdeviceadvisor</a><br />
<a href="/services/iotevents/">iotevents</a><br />
<a href="/services/iotevents_data/">iotevents_data</a><br />
<a href="/services/iotfleetwise/">iotfleetwise</a><br />
<a href="/services/iotsecuretunneling/">iotsecuretunneling</a><br />
<a href="/services/iotsitewise/">iotsitewise</a><br />
<a href="/services/iotthingsgraph/">iotthingsgraph</a><br />
<a href="/services/iottwinmaker/">iottwinmaker</a><br />
<a href="/services/iotwireless/">iotwireless</a><br />
<a href="/services/ivs/">ivs</a><br />
<a href="/services/ivs_realtime/">ivs_realtime</a><br />
<a href="/services/ivschat/">ivschat</a><br />
<a href="/services/kafka/">kafka</a><br />
<a href="/services/kafkaconnect/">kafkaconnect</a><br />
<a href="/services/kendra/">kendra</a><br />
<a href="/services/kendra_ranking/">kendra_ranking</a><br />
<a href="/services/keyspaces/">keyspaces</a><br />
<a href="/services/keyspacesstreams/">keyspacesstreams</a><br />
<a href="/services/kinesis/">kinesis</a><br />
<a href="/services/kinesis_video_archived_media/">kinesis_video_archived_media</a><br />
<a href="/services/kinesis_video_media/">kinesis_video_media</a><br />
<a href="/services/kinesis_video_signaling/">kinesis_video_signaling</a><br />
</div>
<div class="providerDocColumn">
<a href="/services/kinesisanalytics/">kinesisanalytics</a><br />
<a href="/services/kinesisanalyticsv2/">kinesisanalyticsv2</a><br />
<a href="/services/kinesisvideo/">kinesisvideo</a><br />
<a href="/services/kms/">kms</a><br />
<a href="/services/lakeformation/">lakeformation</a><br />
<a href="/services/lambda/">lambda</a><br />
<a href="/services/launch_wizard/">launch_wizard</a><br />
<a href="/services/lex_models/">lex_models</a><br />
<a href="/services/lex_runtime/">lex_runtime</a><br />
<a href="/services/lexv2_models/">lexv2_models</a><br />
<a href="/services/lexv2_runtime/">lexv2_runtime</a><br />
<a href="/services/license_manager/">license_manager</a><br />
<a href="/services/license_manager_linux_subscriptions/">license_manager_linux_subscriptions</a><br />
<a href="/services/license_manager_user_subscriptions/">license_manager_user_subscriptions</a><br />
<a href="/services/lightsail/">lightsail</a><br />
<a href="/services/location/">location</a><br />
<a href="/services/logs/">logs</a><br />
<a href="/services/lookoutequipment/">lookoutequipment</a><br />
<a href="/services/m2/">m2</a><br />
<a href="/services/machinelearning/">machinelearning</a><br />
<a href="/services/macie2/">macie2</a><br />
<a href="/services/mailmanager/">mailmanager</a><br />
<a href="/services/managedblockchain/">managedblockchain</a><br />
<a href="/services/managedblockchain_query/">managedblockchain_query</a><br />
<a href="/services/marketplace_agreement/">marketplace_agreement</a><br />
<a href="/services/marketplace_catalog/">marketplace_catalog</a><br />
<a href="/services/marketplace_deployment/">marketplace_deployment</a><br />
<a href="/services/marketplace_discovery/">marketplace_discovery</a><br />
<a href="/services/marketplace_entitlement/">marketplace_entitlement</a><br />
<a href="/services/marketplace_reporting/">marketplace_reporting</a><br />
<a href="/services/mediaconnect/">mediaconnect</a><br />
<a href="/services/mediaconvert/">mediaconvert</a><br />
<a href="/services/medialive/">medialive</a><br />
<a href="/services/mediapackage/">mediapackage</a><br />
<a href="/services/mediapackage_vod/">mediapackage_vod</a><br />
<a href="/services/mediapackagev2/">mediapackagev2</a><br />
<a href="/services/mediastore/">mediastore</a><br />
<a href="/services/mediastore_data/">mediastore_data</a><br />
<a href="/services/mediatailor/">mediatailor</a><br />
<a href="/services/medical_imaging/">medical_imaging</a><br />
<a href="/services/memorydb/">memorydb</a><br />
<a href="/services/meteringmarketplace/">meteringmarketplace</a><br />
<a href="/services/mgh/">mgh</a><br />
<a href="/services/mgn/">mgn</a><br />
<a href="/services/migration_hub_refactor_spaces/">migration_hub_refactor_spaces</a><br />
<a href="/services/migrationhub_config/">migrationhub_config</a><br />
<a href="/services/migrationhuborchestrator/">migrationhuborchestrator</a><br />
<a href="/services/migrationhubstrategy/">migrationhubstrategy</a><br />
<a href="/services/mpa/">mpa</a><br />
<a href="/services/mq/">mq</a><br />
<a href="/services/mturk/">mturk</a><br />
<a href="/services/mwaa/">mwaa</a><br />
<a href="/services/mwaa_serverless/">mwaa_serverless</a><br />
<a href="/services/neptune/">neptune</a><br />
<a href="/services/neptune_graph/">neptune_graph</a><br />
<a href="/services/neptunedata/">neptunedata</a><br />
<a href="/services/network_firewall/">network_firewall</a><br />
<a href="/services/networkflowmonitor/">networkflowmonitor</a><br />
<a href="/services/networkmanager/">networkmanager</a><br />
<a href="/services/networkmonitor/">networkmonitor</a><br />
<a href="/services/notifications/">notifications</a><br />
<a href="/services/notificationscontacts/">notificationscontacts</a><br />
<a href="/services/nova_act/">nova_act</a><br />
<a href="/services/oam/">oam</a><br />
<a href="/services/observabilityadmin/">observabilityadmin</a><br />
<a href="/services/odb/">odb</a><br />
<a href="/services/omics/">omics</a><br />
<a href="/services/opensearch/">opensearch</a><br />
<a href="/services/opensearchserverless/">opensearchserverless</a><br />
<a href="/services/organizations/">organizations</a><br />
<a href="/services/osis/">osis</a><br />
<a href="/services/outposts/">outposts</a><br />
<a href="/services/panorama/">panorama</a><br />
<a href="/services/partnercentral_account/">partnercentral_account</a><br />
<a href="/services/partnercentral_benefits/">partnercentral_benefits</a><br />
<a href="/services/partnercentral_channel/">partnercentral_channel</a><br />
<a href="/services/partnercentral_selling/">partnercentral_selling</a><br />
<a href="/services/payment_cryptography/">payment_cryptography</a><br />
<a href="/services/pca_connector_ad/">pca_connector_ad</a><br />
<a href="/services/pca_connector_scep/">pca_connector_scep</a><br />
<a href="/services/pcs/">pcs</a><br />
<a href="/services/personalize/">personalize</a><br />
<a href="/services/personalize_events/">personalize_events</a><br />
<a href="/services/personalize_runtime/">personalize_runtime</a><br />
<a href="/services/pi/">pi</a><br />
<a href="/services/pinpoint/">pinpoint</a><br />
<a href="/services/pinpoint_email/">pinpoint_email</a><br />
<a href="/services/pinpoint_sms_voice/">pinpoint_sms_voice</a><br />
<a href="/services/pinpoint_sms_voice_v2/">pinpoint_sms_voice_v2</a><br />
<a href="/services/pipes/">pipes</a><br />
<a href="/services/polly/">polly</a><br />
<a href="/services/pricing/">pricing</a><br />
<a href="/services/proton/">proton</a><br />
<a href="/services/qapps/">qapps</a><br />
<a href="/services/qbusiness/">qbusiness</a><br />
<a href="/services/qconnect/">qconnect</a><br />
<a href="/services/quicksight/">quicksight</a><br />
<a href="/services/ram/">ram</a><br />
<a href="/services/rbin/">rbin</a><br />
<a href="/services/rds/">rds</a><br />
<a href="/services/redshift/">redshift</a><br />
<a href="/services/redshift_data/">redshift_data</a><br />
<a href="/services/redshift_serverless/">redshift_serverless</a><br />
<a href="/services/rekognition/">rekognition</a><br />
<a href="/services/repostspace/">repostspace</a><br />
<a href="/services/resiliencehub/">resiliencehub</a><br />
<a href="/services/resource_explorer_2/">resource_explorer_2</a><br />
<a href="/services/resource_groups/">resource_groups</a><br />
<a href="/services/resourcegroupstaggingapi/">resourcegroupstaggingapi</a><br />
<a href="/services/rolesanywhere/">rolesanywhere</a><br />
<a href="/services/route53/">route53</a><br />
<a href="/services/route53_recovery_cluster/">route53_recovery_cluster</a><br />
<a href="/services/route53_recovery_control_config/">route53_recovery_control_config</a><br />
<a href="/services/route53_recovery_readiness/">route53_recovery_readiness</a><br />
<a href="/services/route53domains/">route53domains</a><br />
<a href="/services/route53globalresolver/">route53globalresolver</a><br />
<a href="/services/route53profiles/">route53profiles</a><br />
<a href="/services/route53resolver/">route53resolver</a><br />
<a href="/services/rtbfabric/">rtbfabric</a><br />
<a href="/services/rum/">rum</a><br />
<a href="/services/s3/">s3</a><br />
<a href="/services/s3control/">s3control</a><br />
<a href="/services/s3files/">s3files</a><br />
<a href="/services/s3outposts/">s3outposts</a><br />
<a href="/services/s3tables/">s3tables</a><br />
<a href="/services/s3vectors/">s3vectors</a><br />
<a href="/services/sagemaker/">sagemaker</a><br />
<a href="/services/sagemaker_a2i_runtime/">sagemaker_a2i_runtime</a><br />
<a href="/services/sagemaker_edge/">sagemaker_edge</a><br />
<a href="/services/sagemaker_featurestore_runtime/">sagemaker_featurestore_runtime</a><br />
<a href="/services/sagemaker_geospatial/">sagemaker_geospatial</a><br />
<a href="/services/sagemaker_metrics/">sagemaker_metrics</a><br />
<a href="/services/savingsplans/">savingsplans</a><br />
<a href="/services/scheduler/">scheduler</a><br />
<a href="/services/schemas/">schemas</a><br />
<a href="/services/sdb/">sdb</a><br />
<a href="/services/secretsmanager/">secretsmanager</a><br />
<a href="/services/security_ir/">security_ir</a><br />
<a href="/services/securityagent/">securityagent</a><br />
<a href="/services/securityhub/">securityhub</a><br />
<a href="/services/securitylake/">securitylake</a><br />
<a href="/services/serverlessrepo/">serverlessrepo</a><br />
<a href="/services/service_quotas/">service_quotas</a><br />
<a href="/services/servicecatalog/">servicecatalog</a><br />
<a href="/services/servicecatalog_appregistry/">servicecatalog_appregistry</a><br />
<a href="/services/servicediscovery/">servicediscovery</a><br />
<a href="/services/ses/">ses</a><br />
<a href="/services/sesv2/">sesv2</a><br />
<a href="/services/shield/">shield</a><br />
<a href="/services/signer/">signer</a><br />
<a href="/services/signer_data/">signer_data</a><br />
<a href="/services/signin/">signin</a><br />
<a href="/services/simpledbv2/">simpledbv2</a><br />
<a href="/services/simspaceweaver/">simspaceweaver</a><br />
<a href="/services/sms_voice/">sms_voice</a><br />
<a href="/services/snow_device_management/">snow_device_management</a><br />
<a href="/services/snowball/">snowball</a><br />
<a href="/services/sns/">sns</a><br />
<a href="/services/socialmessaging/">socialmessaging</a><br />
<a href="/services/sqs/">sqs</a><br />
<a href="/services/ssm/">ssm</a><br />
<a href="/services/ssm_contacts/">ssm_contacts</a><br />
<a href="/services/ssm_guiconnect/">ssm_guiconnect</a><br />
<a href="/services/ssm_incidents/">ssm_incidents</a><br />
<a href="/services/ssm_quicksetup/">ssm_quicksetup</a><br />
<a href="/services/ssm_sap/">ssm_sap</a><br />
<a href="/services/sso/">sso</a><br />
<a href="/services/sso_admin/">sso_admin</a><br />
<a href="/services/sso_oidc/">sso_oidc</a><br />
<a href="/services/stepfunctions/">stepfunctions</a><br />
<a href="/services/storagegateway/">storagegateway</a><br />
<a href="/services/sts/">sts</a><br />
<a href="/services/supplychain/">supplychain</a><br />
<a href="/services/support/">support</a><br />
<a href="/services/support_app/">support_app</a><br />
<a href="/services/sustainability/">sustainability</a><br />
<a href="/services/swf/">swf</a><br />
<a href="/services/synthetics/">synthetics</a><br />
<a href="/services/taxsettings/">taxsettings</a><br />
<a href="/services/textract/">textract</a><br />
<a href="/services/timestream_influxdb/">timestream_influxdb</a><br />
<a href="/services/timestream_query/">timestream_query</a><br />
<a href="/services/timestream_write/">timestream_write</a><br />
<a href="/services/tnb/">tnb</a><br />
<a href="/services/transcribe/">transcribe</a><br />
<a href="/services/transfer/">transfer</a><br />
<a href="/services/translate/">translate</a><br />
<a href="/services/trustedadvisor/">trustedadvisor</a><br />
<a href="/services/uxc/">uxc</a><br />
<a href="/services/verifiedpermissions/">verifiedpermissions</a><br />
<a href="/services/voice_id/">voice_id</a><br />
<a href="/services/vpc_lattice/">vpc_lattice</a><br />
<a href="/services/waf/">waf</a><br />
<a href="/services/waf_regional/">waf_regional</a><br />
<a href="/services/wafv2/">wafv2</a><br />
<a href="/services/wellarchitected/">wellarchitected</a><br />
<a href="/services/wickr/">wickr</a><br />
<a href="/services/wisdom/">wisdom</a><br />
<a href="/services/workdocs/">workdocs</a><br />
<a href="/services/workmail/">workmail</a><br />
<a href="/services/workmailmessageflow/">workmailmessageflow</a><br />
<a href="/services/workspaces/">workspaces</a><br />
<a href="/services/workspaces_instances/">workspaces_instances</a><br />
<a href="/services/workspaces_thin_client/">workspaces_thin_client</a><br />
<a href="/services/workspaces_web/">workspaces_web</a><br />
<a href="/services/xray/">xray</a><br />
</div>
</div>
