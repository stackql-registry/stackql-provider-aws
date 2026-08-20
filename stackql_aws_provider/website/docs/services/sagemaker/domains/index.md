--- 
title: domains
hide_title: false
hide_table_of_contents: false
keywords:
  - domains
  - sagemaker
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

Creates, updates, deletes, gets or lists a <code>domains</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="domains" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sagemaker.domains" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_domain"
    values={[
        { label: 'describe_domain', value: 'describe_domain' },
        { label: 'list_domains', value: 'list_domains' }
    ]}
>
<TabItem value="describe_domain">

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
    <td><CopyableCode code="app_network_access_type" /></td>
    <td><code>string</code></td>
    <td>Specifies the VPC used for non-EFS traffic. The default value is PublicInternetOnly. PublicInternetOnly - Non-EFS traffic is through a VPC managed by Amazon SageMaker AI, which allows direct internet access VpcOnly - All traffic is through the specified VPC and subnets (PublicInternetOnly, VpcOnly)</td>
</tr>
<tr>
    <td><CopyableCode code="app_security_group_management" /></td>
    <td><code>string</code></td>
    <td>The entity that creates and manages the required security groups for inter-app communication in VPCOnly mode. Required when CreateDomain.AppNetworkAccessType is VPCOnly and DomainSettings.RStudioServerProDomainSettings.DomainExecutionRoleArn is provided. (Service, Customer)</td>
</tr>
<tr>
    <td><CopyableCode code="auth_mode" /></td>
    <td><code>string</code></td>
    <td>The domain's authentication mode. (SSO, IAM)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The creation time.</td>
</tr>
<tr>
    <td><CopyableCode code="default_space_settings" /></td>
    <td><code>object</code></td>
    <td>The default settings for shared spaces that users create in the domain.</td>
</tr>
<tr>
    <td><CopyableCode code="default_user_settings" /></td>
    <td><code>object</code></td>
    <td>Settings which are applied to UserProfiles in this domain if settings are not explicitly specified in a given UserProfile.</td>
</tr>
<tr>
    <td><CopyableCode code="domain_arn" /></td>
    <td><code>string</code></td>
    <td>The domain's Amazon Resource Name (ARN). (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z0-9\-&#93;*:&#91;0-9&#93;&#123;12&#125;:domain/.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="domain_id" /></td>
    <td><code>string</code></td>
    <td>The domain ID. (pattern: &lt;code&gt;d-(-*&#91;a-z0-9&#93;)&#123;1,61&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="domain_name" /></td>
    <td><code>string</code></td>
    <td>The domain name. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,62&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="domain_settings" /></td>
    <td><code>object</code></td>
    <td>A collection of Domain settings.</td>
</tr>
<tr>
    <td><CopyableCode code="failure_reason" /></td>
    <td><code>string</code></td>
    <td>The failure reason.</td>
</tr>
<tr>
    <td><CopyableCode code="home_efs_file_system_creation" /></td>
    <td><code>string</code></td>
    <td>Indicates whether a home EFS file system is created for the domain. (Enabled, Disabled)</td>
</tr>
<tr>
    <td><CopyableCode code="home_efs_file_system_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Elastic File System managed by this Domain.</td>
</tr>
<tr>
    <td><CopyableCode code="home_efs_file_system_kms_key_id" /></td>
    <td><code>string</code></td>
    <td>Use KmsKeyId. (pattern: &lt;code&gt;&#91;a-zA-Z0-9:/_-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="kms_key_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services KMS customer managed key used to encrypt the EFS volume attached to the domain. (pattern: &lt;code&gt;&#91;a-zA-Z0-9:/_-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last modified time.</td>
</tr>
<tr>
    <td><CopyableCode code="security_group_id_for_domain_boundary" /></td>
    <td><code>string</code></td>
    <td>The ID of the security group that authorizes traffic between the RSessionGateway apps and the RStudioServerPro app. (pattern: &lt;code&gt;&#91;-0-9a-zA-Z&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="single_sign_on_application_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the application managed by SageMaker AI in IAM Identity Center. This value is only returned for domains created after October 1, 2023. (pattern: &lt;code&gt;arn:(aws|aws-us-gov|aws-cn|aws-iso|aws-iso-b):sso::&#91;0-9&#93;+:application\/&#91;a-zA-Z0-9-_.&#93;+\/apl-&#91;a-zA-Z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="single_sign_on_managed_application_instance_id" /></td>
    <td><code>string</code></td>
    <td>The IAM Identity Center managed application instance ID.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status. (Deleting, Failed, InService, Pending, Updating, Update_Failed, Delete_Failed)</td>
</tr>
<tr>
    <td><CopyableCode code="subnet_ids" /></td>
    <td><code>array</code></td>
    <td>The VPC subnets that the domain uses for communication.</td>
</tr>
<tr>
    <td><CopyableCode code="tag_propagation" /></td>
    <td><code>string</code></td>
    <td>Indicates whether custom tag propagation is supported for the domain. (ENABLED, DISABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string</code></td>
    <td>The domain's URL.</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Virtual Private Cloud (VPC) that the domain uses for communication. (pattern: &lt;code&gt;&#91;-0-9a-zA-Z&#93;+&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_domains">

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
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The creation time.</td>
</tr>
<tr>
    <td><CopyableCode code="domain_arn" /></td>
    <td><code>string</code></td>
    <td>The domain's Amazon Resource Name (ARN). (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z0-9\-&#93;*:&#91;0-9&#93;&#123;12&#125;:domain/.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="domain_id" /></td>
    <td><code>string</code></td>
    <td>The domain ID. (pattern: &lt;code&gt;d-(-*&#91;a-z0-9&#93;)&#123;1,61&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="domain_name" /></td>
    <td><code>string</code></td>
    <td>The domain name. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,62&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last modified time.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status. (Deleting, Failed, InService, Pending, Updating, Update_Failed, Delete_Failed)</td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string</code></td>
    <td>The domain's URL.</td>
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
    <td><a href="#describe_domain"><CopyableCode code="describe_domain" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>The description of the domain.</td>
</tr>
<tr>
    <td><a href="#list_domains"><CopyableCode code="list_domains" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the domains.</td>
</tr>
<tr>
    <td><a href="#create_domain"><CopyableCode code="create_domain" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DomainName"><code>DomainName</code></a>, <a href="#parameter-AuthMode"><code>AuthMode</code></a>, <a href="#parameter-DefaultUserSettings"><code>DefaultUserSettings</code></a></td>
    <td></td>
    <td>Creates a Domain. A domain consists of an associated Amazon Elastic File System volume, a list of authorized users, and a variety of security, application, policy, and Amazon Virtual Private Cloud (VPC) configurations. Users within a domain can share notebook files and other artifacts with each other. EFS storage When a domain is created, an EFS volume is created for use by all of the users within the domain. Each user receives a private home directory within the EFS volume for notebooks, Git repositories, and data files. SageMaker AI uses the Amazon Web Services Key Management Service (Amazon Web Services KMS) to encrypt the EFS volume attached to the domain with an Amazon Web Services managed key by default. For more control, you can specify a customer managed key. For more information, see Protect Data at Rest Using Encryption. VPC configuration All traffic between the domain and the Amazon EFS volume is through the specified VPC and subnets. For other traffic, you can specify the AppNetworkAccessType parameter. AppNetworkAccessType corresponds to the network access type that you choose when you onboard to the domain. The following options are available: PublicInternetOnly - Non-EFS traffic goes through a VPC managed by Amazon SageMaker AI, which allows internet access. This is the default value. VpcOnly - All traffic is through the specified VPC and subnets. Internet access is disabled by default. To allow internet access, you must specify a NAT gateway. When internet access is disabled, you won't be able to run a Amazon SageMaker AI Studio notebook or to train or host models unless your VPC has an interface endpoint to the SageMaker AI API and runtime or a NAT gateway and your security groups allow outbound connections. NFS traffic over TCP on port 2049 needs to be allowed in both inbound and outbound rules in order to launch a Amazon SageMaker AI Studio app successfully. For more information, see Connect Amazon SageMaker AI Studio Notebooks to Resources in a VPC.</td>
</tr>
<tr>
    <td><a href="#update_domain"><CopyableCode code="update_domain" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DomainId"><code>DomainId</code></a></td>
    <td></td>
    <td>Updates the default settings for new user profiles in the domain.</td>
</tr>
<tr>
    <td><a href="#delete_domain"><CopyableCode code="delete_domain" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Used to delete a domain. If you onboarded with IAM mode, you will need to delete your domain to onboard again using IAM Identity Center. Use with caution. All of the members of the domain will lose access to their EFS volume, including data, notebooks, and other artifacts.</td>
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
    defaultValue="describe_domain"
    values={[
        { label: 'describe_domain', value: 'describe_domain' },
        { label: 'list_domains', value: 'list_domains' }
    ]}
>
<TabItem value="describe_domain">

The description of the domain.

```sql
SELECT
app_network_access_type,
app_security_group_management,
auth_mode,
creation_time,
default_space_settings,
default_user_settings,
domain_arn,
domain_id,
domain_name,
domain_settings,
failure_reason,
home_efs_file_system_creation,
home_efs_file_system_id,
home_efs_file_system_kms_key_id,
kms_key_id,
last_modified_time,
security_group_id_for_domain_boundary,
single_sign_on_application_arn,
single_sign_on_managed_application_instance_id,
status,
subnet_ids,
tag_propagation,
url,
vpc_id
FROM aws.sagemaker.domains
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_domains">

Lists the domains.

```sql
SELECT
creation_time,
domain_arn,
domain_id,
domain_name,
last_modified_time,
status,
url
FROM aws.sagemaker.domains
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_domain"
    values={[
        { label: 'create_domain', value: 'create_domain' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_domain">

Creates a Domain. A domain consists of an associated Amazon Elastic File System volume, a list of authorized users, and a variety of security, application, policy, and Amazon Virtual Private Cloud (VPC) configurations. Users within a domain can share notebook files and other artifacts with each other. EFS storage When a domain is created, an EFS volume is created for use by all of the users within the domain. Each user receives a private home directory within the EFS volume for notebooks, Git repositories, and data files. SageMaker AI uses the Amazon Web Services Key Management Service (Amazon Web Services KMS) to encrypt the EFS volume attached to the domain with an Amazon Web Services managed key by default. For more control, you can specify a customer managed key. For more information, see Protect Data at Rest Using Encryption. VPC configuration All traffic between the domain and the Amazon EFS volume is through the specified VPC and subnets. For other traffic, you can specify the AppNetworkAccessType parameter. AppNetworkAccessType corresponds to the network access type that you choose when you onboard to the domain. The following options are available: PublicInternetOnly - Non-EFS traffic goes through a VPC managed by Amazon SageMaker AI, which allows internet access. This is the default value. VpcOnly - All traffic is through the specified VPC and subnets. Internet access is disabled by default. To allow internet access, you must specify a NAT gateway. When internet access is disabled, you won't be able to run a Amazon SageMaker AI Studio notebook or to train or host models unless your VPC has an interface endpoint to the SageMaker AI API and runtime or a NAT gateway and your security groups allow outbound connections. NFS traffic over TCP on port 2049 needs to be allowed in both inbound and outbound rules in order to launch a Amazon SageMaker AI Studio app successfully. For more information, see Connect Amazon SageMaker AI Studio Notebooks to Resources in a VPC.

```sql
INSERT INTO aws.sagemaker.domains (
DomainName,
AuthMode,
DefaultUserSettings,
DomainSettings,
SubnetIds,
VpcId,
Tags,
AppNetworkAccessType,
HomeEfsFileSystemKmsKeyId,
KmsKeyId,
AppSecurityGroupManagement,
HomeEfsFileSystemCreation,
TagPropagation,
DefaultSpaceSettings,
region
)
SELECT 
'{{ DomainName }}' /* required */,
'{{ AuthMode }}' /* required */,
'{{ DefaultUserSettings }}' /* required */,
'{{ DomainSettings }}',
'{{ SubnetIds }}',
'{{ VpcId }}',
'{{ Tags }}',
'{{ AppNetworkAccessType }}',
'{{ HomeEfsFileSystemKmsKeyId }}',
'{{ KmsKeyId }}',
'{{ AppSecurityGroupManagement }}',
'{{ HomeEfsFileSystemCreation }}',
'{{ TagPropagation }}',
'{{ DefaultSpaceSettings }}',
'{{ region }}'
RETURNING
domain_arn,
domain_id,
url
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: domains
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the domains resource.
    - name: DomainName
      value: "{{ DomainName }}"
      description: |
        A name for the domain.
    - name: AuthMode
      value: "{{ AuthMode }}"
      description: |
        The mode of authentication that members use to access the domain.
      valid_values: ['SSO', 'IAM']
    - name: DefaultUserSettings
      description: |
        The default settings to use to create a user profile when UserSettings isn't specified in the call to the CreateUserProfile API. SecurityGroups is aggregated when specified in both calls. For all other settings in UserSettings, the values specified in CreateUserProfile take precedence over those specified in CreateDomain.
      value:
        ExecutionRole: "{{ ExecutionRole }}"
        SecurityGroups:
          - "{{ SecurityGroups }}"
        SharingSettings:
          NotebookOutputOption: "{{ NotebookOutputOption }}"
          S3OutputPath: "{{ S3OutputPath }}"
          S3KmsKeyId: "{{ S3KmsKeyId }}"
        JupyterServerAppSettings:
          DefaultResourceSpec:
            SageMakerImageArn: "{{ SageMakerImageArn }}"
            SageMakerImageVersionArn: "{{ SageMakerImageVersionArn }}"
            SageMakerImageVersionAlias: "{{ SageMakerImageVersionAlias }}"
            InstanceType: "{{ InstanceType }}"
            LifecycleConfigArn: "{{ LifecycleConfigArn }}"
            TrainingPlanArn: "{{ TrainingPlanArn }}"
          LifecycleConfigArns:
            - "{{ LifecycleConfigArns }}"
          CodeRepositories:
            - RepositoryUrl: "{{ RepositoryUrl }}"
        KernelGatewayAppSettings:
          DefaultResourceSpec:
            SageMakerImageArn: "{{ SageMakerImageArn }}"
            SageMakerImageVersionArn: "{{ SageMakerImageVersionArn }}"
            SageMakerImageVersionAlias: "{{ SageMakerImageVersionAlias }}"
            InstanceType: "{{ InstanceType }}"
            LifecycleConfigArn: "{{ LifecycleConfigArn }}"
            TrainingPlanArn: "{{ TrainingPlanArn }}"
          CustomImages:
            - ImageName: "{{ ImageName }}"
              ImageVersionNumber: {{ ImageVersionNumber }}
              AppImageConfigName: "{{ AppImageConfigName }}"
          LifecycleConfigArns:
            - "{{ LifecycleConfigArns }}"
        TensorBoardAppSettings:
          DefaultResourceSpec:
            SageMakerImageArn: "{{ SageMakerImageArn }}"
            SageMakerImageVersionArn: "{{ SageMakerImageVersionArn }}"
            SageMakerImageVersionAlias: "{{ SageMakerImageVersionAlias }}"
            InstanceType: "{{ InstanceType }}"
            LifecycleConfigArn: "{{ LifecycleConfigArn }}"
            TrainingPlanArn: "{{ TrainingPlanArn }}"
        RStudioServerProAppSettings:
          AccessStatus: "{{ AccessStatus }}"
          UserGroup: "{{ UserGroup }}"
        RSessionAppSettings:
          DefaultResourceSpec:
            SageMakerImageArn: "{{ SageMakerImageArn }}"
            SageMakerImageVersionArn: "{{ SageMakerImageVersionArn }}"
            SageMakerImageVersionAlias: "{{ SageMakerImageVersionAlias }}"
            InstanceType: "{{ InstanceType }}"
            LifecycleConfigArn: "{{ LifecycleConfigArn }}"
            TrainingPlanArn: "{{ TrainingPlanArn }}"
          CustomImages:
            - ImageName: "{{ ImageName }}"
              ImageVersionNumber: {{ ImageVersionNumber }}
              AppImageConfigName: "{{ AppImageConfigName }}"
        CanvasAppSettings:
          TimeSeriesForecastingSettings:
            Status: "{{ Status }}"
            AmazonForecastRoleArn: "{{ AmazonForecastRoleArn }}"
          ModelRegisterSettings:
            Status: "{{ Status }}"
            CrossAccountModelRegisterRoleArn: "{{ CrossAccountModelRegisterRoleArn }}"
          WorkspaceSettings:
            S3ArtifactPath: "{{ S3ArtifactPath }}"
            S3KmsKeyId: "{{ S3KmsKeyId }}"
          IdentityProviderOAuthSettings:
            - DataSourceName: "{{ DataSourceName }}"
              Status: "{{ Status }}"
              SecretArn: "{{ SecretArn }}"
          DirectDeploySettings:
            Status: "{{ Status }}"
          KendraSettings:
            Status: "{{ Status }}"
          GenerativeAiSettings:
            AmazonBedrockRoleArn: "{{ AmazonBedrockRoleArn }}"
          EmrServerlessSettings:
            ExecutionRoleArn: "{{ ExecutionRoleArn }}"
            Status: "{{ Status }}"
        CodeEditorAppSettings:
          DefaultResourceSpec:
            SageMakerImageArn: "{{ SageMakerImageArn }}"
            SageMakerImageVersionArn: "{{ SageMakerImageVersionArn }}"
            SageMakerImageVersionAlias: "{{ SageMakerImageVersionAlias }}"
            InstanceType: "{{ InstanceType }}"
            LifecycleConfigArn: "{{ LifecycleConfigArn }}"
            TrainingPlanArn: "{{ TrainingPlanArn }}"
          CustomImages:
            - ImageName: "{{ ImageName }}"
              ImageVersionNumber: {{ ImageVersionNumber }}
              AppImageConfigName: "{{ AppImageConfigName }}"
          LifecycleConfigArns:
            - "{{ LifecycleConfigArns }}"
          AppLifecycleManagement:
            IdleSettings:
              LifecycleManagement: "{{ LifecycleManagement }}"
              IdleTimeoutInMinutes: {{ IdleTimeoutInMinutes }}
              MinIdleTimeoutInMinutes: {{ MinIdleTimeoutInMinutes }}
              MaxIdleTimeoutInMinutes: {{ MaxIdleTimeoutInMinutes }}
          BuiltInLifecycleConfigArn: "{{ BuiltInLifecycleConfigArn }}"
        JupyterLabAppSettings:
          DefaultResourceSpec:
            SageMakerImageArn: "{{ SageMakerImageArn }}"
            SageMakerImageVersionArn: "{{ SageMakerImageVersionArn }}"
            SageMakerImageVersionAlias: "{{ SageMakerImageVersionAlias }}"
            InstanceType: "{{ InstanceType }}"
            LifecycleConfigArn: "{{ LifecycleConfigArn }}"
            TrainingPlanArn: "{{ TrainingPlanArn }}"
          CustomImages:
            - ImageName: "{{ ImageName }}"
              ImageVersionNumber: {{ ImageVersionNumber }}
              AppImageConfigName: "{{ AppImageConfigName }}"
          LifecycleConfigArns:
            - "{{ LifecycleConfigArns }}"
          CodeRepositories:
            - RepositoryUrl: "{{ RepositoryUrl }}"
          AppLifecycleManagement:
            IdleSettings:
              LifecycleManagement: "{{ LifecycleManagement }}"
              IdleTimeoutInMinutes: {{ IdleTimeoutInMinutes }}
              MinIdleTimeoutInMinutes: {{ MinIdleTimeoutInMinutes }}
              MaxIdleTimeoutInMinutes: {{ MaxIdleTimeoutInMinutes }}
          EmrSettings:
            AssumableRoleArns:
              - "{{ AssumableRoleArns }}"
            ExecutionRoleArns:
              - "{{ ExecutionRoleArns }}"
          BuiltInLifecycleConfigArn: "{{ BuiltInLifecycleConfigArn }}"
        SpaceStorageSettings:
          DefaultEbsStorageSettings:
            DefaultEbsVolumeSizeInGb: {{ DefaultEbsVolumeSizeInGb }}
            MaximumEbsVolumeSizeInGb: {{ MaximumEbsVolumeSizeInGb }}
        DefaultLandingUri: "{{ DefaultLandingUri }}"
        StudioWebPortal: "{{ StudioWebPortal }}"
        CustomPosixUserConfig:
          Uid: {{ Uid }}
          Gid: {{ Gid }}
        CustomFileSystemConfigs:
          - EFSFileSystemConfig:
              FileSystemId: "{{ FileSystemId }}"
              FileSystemPath: "{{ FileSystemPath }}"
            FSxLustreFileSystemConfig:
              FileSystemId: "{{ FileSystemId }}"
              FileSystemPath: "{{ FileSystemPath }}"
            S3FileSystemConfig:
              MountPath: "{{ MountPath }}"
              S3Uri: "{{ S3Uri }}"
        StudioWebPortalSettings:
          HiddenMlTools:
            - "{{ HiddenMlTools }}"
          HiddenAppTypes:
            - "{{ HiddenAppTypes }}"
          HiddenInstanceTypes:
            - "{{ HiddenInstanceTypes }}"
          HiddenSageMakerImageVersionAliases:
            - SageMakerImageName: "{{ SageMakerImageName }}"
              VersionAliases: "{{ VersionAliases }}"
          ExecutionRoleSessionNameMode: "{{ ExecutionRoleSessionNameMode }}"
        AutoMountHomeEFS: "{{ AutoMountHomeEFS }}"
    - name: DomainSettings
      description: |
        A collection of Domain settings.
      value:
        SecurityGroupIds:
          - "{{ SecurityGroupIds }}"
        RStudioServerProDomainSettings:
          DomainExecutionRoleArn: "{{ DomainExecutionRoleArn }}"
          RStudioConnectUrl: "{{ RStudioConnectUrl }}"
          RStudioPackageManagerUrl: "{{ RStudioPackageManagerUrl }}"
          DefaultResourceSpec:
            SageMakerImageArn: "{{ SageMakerImageArn }}"
            SageMakerImageVersionArn: "{{ SageMakerImageVersionArn }}"
            SageMakerImageVersionAlias: "{{ SageMakerImageVersionAlias }}"
            InstanceType: "{{ InstanceType }}"
            LifecycleConfigArn: "{{ LifecycleConfigArn }}"
            TrainingPlanArn: "{{ TrainingPlanArn }}"
        ExecutionRoleIdentityConfig: "{{ ExecutionRoleIdentityConfig }}"
        TrustedIdentityPropagationSettings:
          Status: "{{ Status }}"
        DockerSettings:
          EnableDockerAccess: "{{ EnableDockerAccess }}"
          VpcOnlyTrustedAccounts:
            - "{{ VpcOnlyTrustedAccounts }}"
          RootlessDocker: "{{ RootlessDocker }}"
        AmazonQSettings:
          Status: "{{ Status }}"
          QProfileArn: "{{ QProfileArn }}"
        UnifiedStudioSettings:
          StudioWebPortalAccess: "{{ StudioWebPortalAccess }}"
          DomainAccountId: "{{ DomainAccountId }}"
          DomainRegion: "{{ DomainRegion }}"
          DomainId: "{{ DomainId }}"
          ProjectId: "{{ ProjectId }}"
          EnvironmentId: "{{ EnvironmentId }}"
          ProjectS3Path: "{{ ProjectS3Path }}"
          SingleSignOnApplicationArn: "{{ SingleSignOnApplicationArn }}"
        IpAddressType: "{{ IpAddressType }}"
    - name: SubnetIds
      value:
        - "{{ SubnetIds }}"
      description: |
        The VPC subnets that the domain uses for communication. The field is optional when the AppNetworkAccessType parameter is set to PublicInternetOnly for domains created from Amazon SageMaker Unified Studio.
    - name: VpcId
      value: "{{ VpcId }}"
      description: |
        The ID of the Amazon Virtual Private Cloud (VPC) that the domain uses for communication. The field is optional when the AppNetworkAccessType parameter is set to PublicInternetOnly for domains created from Amazon SageMaker Unified Studio.
    - name: Tags
      description: |
        Tags to associated with the Domain. Each tag consists of a key and an optional value. Tag keys must be unique per resource. Tags are searchable using the Search API. Tags that you specify for the Domain are also added to all Apps that the Domain launches.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: AppNetworkAccessType
      value: "{{ AppNetworkAccessType }}"
      description: |
        Specifies the VPC used for non-EFS traffic. The default value is PublicInternetOnly. PublicInternetOnly - Non-EFS traffic is through a VPC managed by Amazon SageMaker AI, which allows direct internet access VpcOnly - All traffic is through the specified VPC and subnets
      valid_values: ['PublicInternetOnly', 'VpcOnly']
    - name: HomeEfsFileSystemKmsKeyId
      value: "{{ HomeEfsFileSystemKmsKeyId }}"
      description: |
        Use KmsKeyId.
    - name: KmsKeyId
      value: "{{ KmsKeyId }}"
      description: |
        SageMaker AI uses Amazon Web Services KMS to encrypt EFS and EBS volumes attached to the domain with an Amazon Web Services managed key by default. For more control, specify a customer managed key.
    - name: AppSecurityGroupManagement
      value: "{{ AppSecurityGroupManagement }}"
      description: |
        The entity that creates and manages the required security groups for inter-app communication in VPCOnly mode. Required when CreateDomain.AppNetworkAccessType is VPCOnly and DomainSettings.RStudioServerProDomainSettings.DomainExecutionRoleArn is provided. If setting up the domain for use with RStudio, this value must be set to Service.
      valid_values: ['Service', 'Customer']
    - name: HomeEfsFileSystemCreation
      value: "{{ HomeEfsFileSystemCreation }}"
      description: |
        Indicates whether to create a home EFS file system for the domain. Defaults to Enabled. Set to Disabled to skip EFS creation and reduce domain creation time. You can enable EFS later by calling UpdateDomain.
      valid_values: ['Enabled', 'Disabled']
    - name: TagPropagation
      value: "{{ TagPropagation }}"
      description: |
        Indicates whether custom tag propagation is supported for the domain. Defaults to DISABLED.
      valid_values: ['ENABLED', 'DISABLED']
    - name: DefaultSpaceSettings
      description: |
        The default settings for shared spaces that users create in the domain.
      value:
        ExecutionRole: "{{ ExecutionRole }}"
        SecurityGroups:
          - "{{ SecurityGroups }}"
        JupyterServerAppSettings:
          DefaultResourceSpec:
            SageMakerImageArn: "{{ SageMakerImageArn }}"
            SageMakerImageVersionArn: "{{ SageMakerImageVersionArn }}"
            SageMakerImageVersionAlias: "{{ SageMakerImageVersionAlias }}"
            InstanceType: "{{ InstanceType }}"
            LifecycleConfigArn: "{{ LifecycleConfigArn }}"
            TrainingPlanArn: "{{ TrainingPlanArn }}"
          LifecycleConfigArns:
            - "{{ LifecycleConfigArns }}"
          CodeRepositories:
            - RepositoryUrl: "{{ RepositoryUrl }}"
        KernelGatewayAppSettings:
          DefaultResourceSpec:
            SageMakerImageArn: "{{ SageMakerImageArn }}"
            SageMakerImageVersionArn: "{{ SageMakerImageVersionArn }}"
            SageMakerImageVersionAlias: "{{ SageMakerImageVersionAlias }}"
            InstanceType: "{{ InstanceType }}"
            LifecycleConfigArn: "{{ LifecycleConfigArn }}"
            TrainingPlanArn: "{{ TrainingPlanArn }}"
          CustomImages:
            - ImageName: "{{ ImageName }}"
              ImageVersionNumber: {{ ImageVersionNumber }}
              AppImageConfigName: "{{ AppImageConfigName }}"
          LifecycleConfigArns:
            - "{{ LifecycleConfigArns }}"
        JupyterLabAppSettings:
          DefaultResourceSpec:
            SageMakerImageArn: "{{ SageMakerImageArn }}"
            SageMakerImageVersionArn: "{{ SageMakerImageVersionArn }}"
            SageMakerImageVersionAlias: "{{ SageMakerImageVersionAlias }}"
            InstanceType: "{{ InstanceType }}"
            LifecycleConfigArn: "{{ LifecycleConfigArn }}"
            TrainingPlanArn: "{{ TrainingPlanArn }}"
          CustomImages:
            - ImageName: "{{ ImageName }}"
              ImageVersionNumber: {{ ImageVersionNumber }}
              AppImageConfigName: "{{ AppImageConfigName }}"
          LifecycleConfigArns:
            - "{{ LifecycleConfigArns }}"
          CodeRepositories:
            - RepositoryUrl: "{{ RepositoryUrl }}"
          AppLifecycleManagement:
            IdleSettings:
              LifecycleManagement: "{{ LifecycleManagement }}"
              IdleTimeoutInMinutes: {{ IdleTimeoutInMinutes }}
              MinIdleTimeoutInMinutes: {{ MinIdleTimeoutInMinutes }}
              MaxIdleTimeoutInMinutes: {{ MaxIdleTimeoutInMinutes }}
          EmrSettings:
            AssumableRoleArns:
              - "{{ AssumableRoleArns }}"
            ExecutionRoleArns:
              - "{{ ExecutionRoleArns }}"
          BuiltInLifecycleConfigArn: "{{ BuiltInLifecycleConfigArn }}"
        SpaceStorageSettings:
          DefaultEbsStorageSettings:
            DefaultEbsVolumeSizeInGb: {{ DefaultEbsVolumeSizeInGb }}
            MaximumEbsVolumeSizeInGb: {{ MaximumEbsVolumeSizeInGb }}
        CustomPosixUserConfig:
          Uid: {{ Uid }}
          Gid: {{ Gid }}
        CustomFileSystemConfigs:
          - EFSFileSystemConfig:
              FileSystemId: "{{ FileSystemId }}"
              FileSystemPath: "{{ FileSystemPath }}"
            FSxLustreFileSystemConfig:
              FileSystemId: "{{ FileSystemId }}"
              FileSystemPath: "{{ FileSystemPath }}"
            S3FileSystemConfig:
              MountPath: "{{ MountPath }}"
              S3Uri: "{{ S3Uri }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_domain"
    values={[
        { label: 'update_domain', value: 'update_domain' }
    ]}
>
<TabItem value="update_domain">

Updates the default settings for new user profiles in the domain.

```sql
UPDATE aws.sagemaker.domains
SET 
DomainId = '{{ DomainId }}',
DefaultUserSettings = '{{ DefaultUserSettings }}',
DomainSettingsForUpdate = '{{ DomainSettingsForUpdate }}',
AppSecurityGroupManagement = '{{ AppSecurityGroupManagement }}',
DefaultSpaceSettings = '{{ DefaultSpaceSettings }}',
SubnetIds = '{{ SubnetIds }}',
AppNetworkAccessType = '{{ AppNetworkAccessType }}',
TagPropagation = '{{ TagPropagation }}',
HomeEfsFileSystemCreation = '{{ HomeEfsFileSystemCreation }}',
VpcId = '{{ VpcId }}'
WHERE 
region = '{{ region }}' --required
AND DomainId = '{{ DomainId }}' --required
RETURNING
domain_arn;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_domain"
    values={[
        { label: 'delete_domain', value: 'delete_domain' }
    ]}
>
<TabItem value="delete_domain">

Used to delete a domain. If you onboarded with IAM mode, you will need to delete your domain to onboard again using IAM Identity Center. Use with caution. All of the members of the domain will lose access to their EFS volume, including data, notebooks, and other artifacts.

```sql
DELETE FROM aws.sagemaker.domains
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
