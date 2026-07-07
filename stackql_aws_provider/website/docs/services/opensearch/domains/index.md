--- 
title: domains
hide_title: false
hide_table_of_contents: false
keywords:
  - domains
  - opensearch
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.opensearch.domains" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_domain"
    values={[
        { label: 'describe_domain', value: 'describe_domain' },
        { label: 'describe_domains', value: 'describe_domains' }
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
    <td><CopyableCode code="AIMLOptions" /></td>
    <td><code>object</code></td>
    <td>Container for parameters required to enable all machine learning features.</td>
</tr>
<tr>
    <td><CopyableCode code="ARN" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the domain. See Identifiers for IAM Entities in Using Amazon Web Services Identity and Access Management for more information. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="AccessPolicies" /></td>
    <td><code>string</code></td>
    <td>Access policy rules for an Amazon OpenSearch Service domain endpoint. For more information, see Configuring access policies. The maximum size of a policy document is 100 KB. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="AdvancedOptions" /></td>
    <td><code>object</code></td>
    <td>Key-value pairs that specify advanced configuration options.</td>
</tr>
<tr>
    <td><CopyableCode code="AdvancedSecurityOptions" /></td>
    <td><code>object</code></td>
    <td>Settings for fine-grained access control.</td>
</tr>
<tr>
    <td><CopyableCode code="AutoTuneOptions" /></td>
    <td><code>object</code></td>
    <td>Auto-Tune settings for the domain.</td>
</tr>
<tr>
    <td><CopyableCode code="AutomatedSnapshotPauseOptions" /></td>
    <td><code>object</code></td>
    <td>The current status of the domain's automated snapshot pause options.</td>
</tr>
<tr>
    <td><CopyableCode code="ChangeProgressDetails" /></td>
    <td><code>object</code></td>
    <td>Information about a configuration change happening on the domain.</td>
</tr>
<tr>
    <td><CopyableCode code="ClusterConfig" /></td>
    <td><code>object</code></td>
    <td>Container for the cluster configuration of an OpenSearch Service domain. For more information, see Creating and managing Amazon OpenSearch Service domains.</td>
</tr>
<tr>
    <td><CopyableCode code="CognitoOptions" /></td>
    <td><code>object</code></td>
    <td>Container for the parameters required to enable Cognito authentication for an OpenSearch Service domain. For more information, see Configuring Amazon Cognito authentication for OpenSearch Dashboards.</td>
</tr>
<tr>
    <td><CopyableCode code="Created" /></td>
    <td><code>boolean</code></td>
    <td>Creation status of an OpenSearch Service domain. True if domain creation is complete. False if domain creation is still in progress.</td>
</tr>
<tr>
    <td><CopyableCode code="Deleted" /></td>
    <td><code>boolean</code></td>
    <td>Deletion status of an OpenSearch Service domain. True if domain deletion is complete. False if domain deletion is still in progress. Once deletion is complete, the status of the domain is no longer returned.</td>
</tr>
<tr>
    <td><CopyableCode code="DeploymentStrategyOptions" /></td>
    <td><code>object</code></td>
    <td>Specifies the deployment strategy options for the domain.</td>
</tr>
<tr>
    <td><CopyableCode code="DomainEndpointOptions" /></td>
    <td><code>object</code></td>
    <td>Options to configure a custom endpoint for an OpenSearch Service domain.</td>
</tr>
<tr>
    <td><CopyableCode code="DomainEndpointV2HostedZoneId" /></td>
    <td><code>string</code></td>
    <td>The dual stack hosted zone ID for the domain.</td>
</tr>
<tr>
    <td><CopyableCode code="DomainId" /></td>
    <td><code>string</code></td>
    <td>Unique identifier for the domain.</td>
</tr>
<tr>
    <td><CopyableCode code="DomainName" /></td>
    <td><code>string</code></td>
    <td>The name of an OpenSearch Service domain. Domain names are unique across the domains owned by an account within an Amazon Web Services Region. (pattern: &lt;code&gt;&#91;a-z&#93;&#91;a-z0-9\-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="DomainProcessingStatus" /></td>
    <td><code>string</code></td>
    <td>The status of any changes that are currently in progress for the domain. (Creating, Active, Modifying, UpgradingEngineVersion, UpdatingServiceSoftware, Isolated, Deleting)</td>
</tr>
<tr>
    <td><CopyableCode code="EBSOptions" /></td>
    <td><code>object</code></td>
    <td>Container for the parameters required to enable EBS-based storage for an OpenSearch Service domain.</td>
</tr>
<tr>
    <td><CopyableCode code="EncryptionAtRestOptions" /></td>
    <td><code>object</code></td>
    <td>Specifies whether the domain should encrypt data at rest, and if so, the Key Management Service (KMS) key to use. Can only be used when creating a new domain or enabling encryption at rest for the first time on an existing domain. You can't modify this parameter after it's already been specified.</td>
</tr>
<tr>
    <td><CopyableCode code="Endpoint" /></td>
    <td><code>string</code></td>
    <td>Domain-specific endpoint used to submit index, search, and data upload requests to the domain.</td>
</tr>
<tr>
    <td><CopyableCode code="EndpointV2" /></td>
    <td><code>string</code></td>
    <td>If IPAddressType to set to dualstack, a version 2 domain endpoint is provisioned. This endpoint functions like a normal endpoint, except that it works with both IPv4 and IPv6 IP addresses. Normal endpoints work only with IPv4 IP addresses.</td>
</tr>
<tr>
    <td><CopyableCode code="Endpoints" /></td>
    <td><code>object</code></td>
    <td>The key-value pair that exists if the OpenSearch Service domain uses VPC endpoints. For example: IPv4 IP addresses - 'vpc','vpc-endpoint-h2dsd34efgyghrtguk5gt6j2foh4.us-east-1.es.amazonaws.com' Dual stack IP addresses - 'vpcv2':'vpc-endpoint-h2dsd34efgyghrtguk5gt6j2foh4.aos.us-east-1.on.aws'</td>
</tr>
<tr>
    <td><CopyableCode code="EngineVersion" /></td>
    <td><code>string</code></td>
    <td>Version of OpenSearch or Elasticsearch that the domain is running, in the format Elasticsearch_X.Y or OpenSearch_X.Y. (pattern: &lt;code&gt;^Elasticsearch_&#91;0-9&#93;&#123;1&#125;\.&#91;0-9&#93;&#123;1,2&#125;$|^OpenSearch_&#91;0-9&#93;&#123;1,2&#125;\.&#91;0-9&#93;&#123;1,2&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="IPAddressType" /></td>
    <td><code>string</code></td>
    <td>The type of IP addresses supported by the endpoint for the domain. (ipv4, dualstack)</td>
</tr>
<tr>
    <td><CopyableCode code="IdentityCenterOptions" /></td>
    <td><code>object</code></td>
    <td>Configuration options for controlling IAM Identity Center integration within a domain.</td>
</tr>
<tr>
    <td><CopyableCode code="LogPublishingOptions" /></td>
    <td><code>object</code></td>
    <td>Log publishing options for the domain.</td>
</tr>
<tr>
    <td><CopyableCode code="ModifyingProperties" /></td>
    <td><code>array</code></td>
    <td>Information about the domain properties that are currently being modified.</td>
</tr>
<tr>
    <td><CopyableCode code="NodeToNodeEncryptionOptions" /></td>
    <td><code>object</code></td>
    <td>Enables or disables node-to-node encryption. For more information, see Node-to-node encryption for Amazon OpenSearch Service.</td>
</tr>
<tr>
    <td><CopyableCode code="OffPeakWindowOptions" /></td>
    <td><code>object</code></td>
    <td>Options for a domain's off-peak window, during which OpenSearch Service can perform mandatory configuration changes on the domain.</td>
</tr>
<tr>
    <td><CopyableCode code="Processing" /></td>
    <td><code>boolean</code></td>
    <td>The status of the domain configuration. True if OpenSearch Service is processing configuration changes. False if the configuration is active.</td>
</tr>
<tr>
    <td><CopyableCode code="ServiceSoftwareOptions" /></td>
    <td><code>object</code></td>
    <td>The current status of the domain's service software.</td>
</tr>
<tr>
    <td><CopyableCode code="SnapshotOptions" /></td>
    <td><code>object</code></td>
    <td>The time, in UTC format, when OpenSearch Service takes a daily automated snapshot of the specified domain. Default is 0 hours.</td>
</tr>
<tr>
    <td><CopyableCode code="SoftwareUpdateOptions" /></td>
    <td><code>object</code></td>
    <td>Options for configuring service software updates for a domain.</td>
</tr>
<tr>
    <td><CopyableCode code="UpgradeProcessing" /></td>
    <td><code>boolean</code></td>
    <td>The status of a domain version upgrade to a new version of OpenSearch or Elasticsearch. True if OpenSearch Service is in the process of a version upgrade. False if the configuration is active.</td>
</tr>
<tr>
    <td><CopyableCode code="VPCOptions" /></td>
    <td><code>object</code></td>
    <td>The VPC configuration for the domain.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="describe_domains">

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
    <td><CopyableCode code="DomainStatusList" /></td>
    <td><code>array</code></td>
    <td>The status of the requested domains.</td>
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
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the domain configuration for the specified Amazon OpenSearch Service domain, including the domain ID, domain service endpoint, and domain ARN.</td>
</tr>
<tr>
    <td><a href="#describe_domains"><CopyableCode code="describe_domains" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns domain configuration information about the specified Amazon OpenSearch Service domains.</td>
</tr>
<tr>
    <td><a href="#create_domain"><CopyableCode code="create_domain" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DomainName"><code>DomainName</code></a></td>
    <td></td>
    <td>Creates an Amazon OpenSearch Service domain. For more information, see Creating and managing Amazon OpenSearch Service domains.</td>
</tr>
<tr>
    <td><a href="#delete_domain"><CopyableCode code="delete_domain" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an Amazon OpenSearch Service domain and all of its data. You can't recover a domain after you delete it.</td>
</tr>
<tr>
    <td><a href="#cancel_service_software_update"><CopyableCode code="cancel_service_software_update" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DomainName"><code>DomainName</code></a></td>
    <td></td>
    <td>Cancels a scheduled service software update for an Amazon OpenSearch Service domain. You can only perform this operation before the AutomatedUpdateDate and when the domain's UpdateStatus is PENDING_UPDATE. For more information, see Service software updates in Amazon OpenSearch Service.</td>
</tr>
<tr>
    <td><a href="#start_domain_maintenance"><CopyableCode code="start_domain_maintenance" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Action"><code>Action</code></a></td>
    <td></td>
    <td>Starts the node maintenance process on the data node. These processes can include a node reboot, an Opensearch or Elasticsearch process restart, or a Dashboard or Kibana restart.</td>
</tr>
<tr>
    <td><a href="#rollback_service_software_update"><CopyableCode code="rollback_service_software_update" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DomainName"><code>DomainName</code></a></td>
    <td></td>
    <td>Rolls back a service software update for a domain to the previous version. For more information, see Service software updates in Amazon OpenSearch Service.</td>
</tr>
<tr>
    <td><a href="#start_service_software_update"><CopyableCode code="start_service_software_update" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DomainName"><code>DomainName</code></a></td>
    <td></td>
    <td>Schedules a service software update for an Amazon OpenSearch Service domain. For more information, see Service software updates in Amazon OpenSearch Service.</td>
</tr>
<tr>
    <td><a href="#upgrade_domain"><CopyableCode code="upgrade_domain" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DomainName"><code>DomainName</code></a>, <a href="#parameter-TargetVersion"><code>TargetVersion</code></a></td>
    <td></td>
    <td>Allows you to either upgrade your Amazon OpenSearch Service domain or perform an upgrade eligibility check to a compatible version of OpenSearch or Elasticsearch.</td>
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
<tr id="parameter-domain_name">
    <td><CopyableCode code="domain_name" /></td>
    <td><code>string</code></td>
    <td>The name of the domain.</td>
</tr>
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
        { label: 'describe_domains', value: 'describe_domains' }
    ]}
>
<TabItem value="describe_domain">

Describes the domain configuration for the specified Amazon OpenSearch Service domain, including the domain ID, domain service endpoint, and domain ARN.

```sql
SELECT
AIMLOptions,
ARN,
AccessPolicies,
AdvancedOptions,
AdvancedSecurityOptions,
AutoTuneOptions,
AutomatedSnapshotPauseOptions,
ChangeProgressDetails,
ClusterConfig,
CognitoOptions,
Created,
Deleted,
DeploymentStrategyOptions,
DomainEndpointOptions,
DomainEndpointV2HostedZoneId,
DomainId,
DomainName,
DomainProcessingStatus,
EBSOptions,
EncryptionAtRestOptions,
Endpoint,
EndpointV2,
Endpoints,
EngineVersion,
IPAddressType,
IdentityCenterOptions,
LogPublishingOptions,
ModifyingProperties,
NodeToNodeEncryptionOptions,
OffPeakWindowOptions,
Processing,
ServiceSoftwareOptions,
SnapshotOptions,
SoftwareUpdateOptions,
UpgradeProcessing,
VPCOptions
FROM aws.opensearch.domains
WHERE domain_name = '{{ domain_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="describe_domains">

Returns domain configuration information about the specified Amazon OpenSearch Service domains.

```sql
SELECT
DomainStatusList
FROM aws.opensearch.domains
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

Creates an Amazon OpenSearch Service domain. For more information, see Creating and managing Amazon OpenSearch Service domains.

```sql
INSERT INTO aws.opensearch.domains (
DomainName,
EngineVersion,
ClusterConfig,
EBSOptions,
AccessPolicies,
IPAddressType,
SnapshotOptions,
VPCOptions,
CognitoOptions,
EncryptionAtRestOptions,
NodeToNodeEncryptionOptions,
AdvancedOptions,
LogPublishingOptions,
DomainEndpointOptions,
AdvancedSecurityOptions,
IdentityCenterOptions,
TagList,
AutoTuneOptions,
OffPeakWindowOptions,
SoftwareUpdateOptions,
AIMLOptions,
DeploymentStrategyOptions,
AutomatedSnapshotPauseOptions,
region
)
SELECT 
'{{ DomainName }}' /* required */,
'{{ EngineVersion }}',
'{{ ClusterConfig }}',
'{{ EBSOptions }}',
'{{ AccessPolicies }}',
'{{ IPAddressType }}',
'{{ SnapshotOptions }}',
'{{ VPCOptions }}',
'{{ CognitoOptions }}',
'{{ EncryptionAtRestOptions }}',
'{{ NodeToNodeEncryptionOptions }}',
'{{ AdvancedOptions }}',
'{{ LogPublishingOptions }}',
'{{ DomainEndpointOptions }}',
'{{ AdvancedSecurityOptions }}',
'{{ IdentityCenterOptions }}',
'{{ TagList }}',
'{{ AutoTuneOptions }}',
'{{ OffPeakWindowOptions }}',
'{{ SoftwareUpdateOptions }}',
'{{ AIMLOptions }}',
'{{ DeploymentStrategyOptions }}',
'{{ AutomatedSnapshotPauseOptions }}',
'{{ region }}'
RETURNING
DomainStatus
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
        The name of an OpenSearch Service domain. Domain names are unique across the domains owned by an account within an Amazon Web Services Region.
    - name: EngineVersion
      value: "{{ EngineVersion }}"
    - name: ClusterConfig
      description: |
        Container for the cluster configuration of an OpenSearch Service domain. For more information, see Creating and managing Amazon OpenSearch Service domains.
      value:
        InstanceType: "{{ InstanceType }}"
        InstanceCount: {{ InstanceCount }}
        DedicatedMasterEnabled: {{ DedicatedMasterEnabled }}
        ZoneAwarenessEnabled: {{ ZoneAwarenessEnabled }}
        ZoneAwarenessConfig:
          AvailabilityZoneCount: {{ AvailabilityZoneCount }}
        DedicatedMasterType: "{{ DedicatedMasterType }}"
        DedicatedMasterCount: {{ DedicatedMasterCount }}
        WarmEnabled: {{ WarmEnabled }}
        WarmType: "{{ WarmType }}"
        WarmCount: {{ WarmCount }}
        ColdStorageOptions:
          Enabled: {{ Enabled }}
        MultiAZWithStandbyEnabled: {{ MultiAZWithStandbyEnabled }}
        NodeOptions:
          - NodeType: "{{ NodeType }}"
            NodeConfig:
              Enabled: {{ Enabled }}
              Type: "{{ Type }}"
              Count: {{ Count }}
    - name: EBSOptions
      description: |
        Container for the parameters required to enable EBS-based storage for an OpenSearch Service domain.
      value:
        EBSEnabled: {{ EBSEnabled }}
        VolumeType: "{{ VolumeType }}"
        VolumeSize: {{ VolumeSize }}
        Iops: {{ Iops }}
        Throughput: {{ Throughput }}
    - name: AccessPolicies
      value: "{{ AccessPolicies }}"
      description: |
        Access policy rules for an Amazon OpenSearch Service domain endpoint. For more information, see Configuring access policies. The maximum size of a policy document is 100 KB.
    - name: IPAddressType
      value: "{{ IPAddressType }}"
      valid_values: ['ipv4', 'dualstack']
    - name: SnapshotOptions
      description: |
        The time, in UTC format, when OpenSearch Service takes a daily automated snapshot of the specified domain. Default is 0 hours.
      value:
        AutomatedSnapshotStartHour: {{ AutomatedSnapshotStartHour }}
    - name: VPCOptions
      description: |
        Options to specify the subnets and security groups for an Amazon OpenSearch Service VPC endpoint. For more information, see Launching your Amazon OpenSearch Service domains using a VPC.
      value:
        SubnetIds:
          - "{{ SubnetIds }}"
        SecurityGroupIds:
          - "{{ SecurityGroupIds }}"
        EgressEnabled: {{ EgressEnabled }}
    - name: CognitoOptions
      description: |
        Container for the parameters required to enable Cognito authentication for an OpenSearch Service domain. For more information, see Configuring Amazon Cognito authentication for OpenSearch Dashboards.
      value:
        Enabled: {{ Enabled }}
        UserPoolId: "{{ UserPoolId }}"
        IdentityPoolId: "{{ IdentityPoolId }}"
        RoleArn: "{{ RoleArn }}"
    - name: EncryptionAtRestOptions
      description: |
        Specifies whether the domain should encrypt data at rest, and if so, the Key Management Service (KMS) key to use. Can only be used when creating a new domain or enabling encryption at rest for the first time on an existing domain. You can't modify this parameter after it's already been specified.
      value:
        Enabled: {{ Enabled }}
        KmsKeyId: "{{ KmsKeyId }}"
    - name: NodeToNodeEncryptionOptions
      description: |
        Enables or disables node-to-node encryption. For more information, see Node-to-node encryption for Amazon OpenSearch Service.
      value:
        Enabled: {{ Enabled }}
    - name: AdvancedOptions
      value: "{{ AdvancedOptions }}"
      description: |
        Exposes native OpenSearch configuration values from opensearch.yml. The following advanced options are available: Allows references to indexes in an HTTP request body. Must be false when configuring access to individual sub-resources. Default is true. Specifies the percentage of heap space allocated to field data. Default is unbounded. For more information, see Advanced cluster parameters.
    - name: LogPublishingOptions
      value: "{{ LogPublishingOptions }}"
    - name: DomainEndpointOptions
      description: |
        Options to configure a custom endpoint for an OpenSearch Service domain.
      value:
        EnforceHTTPS: {{ EnforceHTTPS }}
        TLSSecurityPolicy: "{{ TLSSecurityPolicy }}"
        CustomEndpointEnabled: {{ CustomEndpointEnabled }}
        CustomEndpoint: "{{ CustomEndpoint }}"
        CustomEndpointCertificateArn: "{{ CustomEndpointCertificateArn }}"
    - name: AdvancedSecurityOptions
      description: |
        Options for enabling and configuring fine-grained access control. For more information, see Fine-grained access control in Amazon OpenSearch Service.
      value:
        Enabled: {{ Enabled }}
        InternalUserDatabaseEnabled: {{ InternalUserDatabaseEnabled }}
        MasterUserOptions:
          MasterUserARN: "{{ MasterUserARN }}"
          MasterUserName: "{{ MasterUserName }}"
          MasterUserPassword: "{{ MasterUserPassword }}"
        SAMLOptions:
          Enabled: {{ Enabled }}
          Idp:
            MetadataContent: "{{ MetadataContent }}"
            EntityId: "{{ EntityId }}"
          MasterUserName: "{{ MasterUserName }}"
          MasterBackendRole: "{{ MasterBackendRole }}"
          SubjectKey: "{{ SubjectKey }}"
          RolesKey: "{{ RolesKey }}"
          SessionTimeoutMinutes: {{ SessionTimeoutMinutes }}
        JWTOptions:
          Enabled: {{ Enabled }}
          SubjectKey: "{{ SubjectKey }}"
          RolesKey: "{{ RolesKey }}"
          JwksUrl: "{{ JwksUrl }}"
          PublicKey: "{{ PublicKey }}"
        IAMFederationOptions:
          Enabled: {{ Enabled }}
          SubjectKey: "{{ SubjectKey }}"
          RolesKey: "{{ RolesKey }}"
        AnonymousAuthEnabled: {{ AnonymousAuthEnabled }}
    - name: IdentityCenterOptions
      description: |
        Configuration settings for enabling and managing IAM Identity Center.
      value:
        EnabledAPIAccess: {{ EnabledAPIAccess }}
        IdentityCenterInstanceARN: "{{ IdentityCenterInstanceARN }}"
        IdentityCenterInstanceRegion: "{{ IdentityCenterInstanceRegion }}"
        SubjectKey: "{{ SubjectKey }}"
        RolesKey: "{{ RolesKey }}"
    - name: TagList
      description: |
        A list of tags attached to a domain.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: AutoTuneOptions
      description: |
        Options for configuring Auto-Tune. For more information, see Auto-Tune for Amazon OpenSearch Service
      value:
        DesiredState: "{{ DesiredState }}"
        MaintenanceSchedules:
          - StartAt: "{{ StartAt }}"
            Duration:
              Value: {{ Value }}
              Unit: "{{ Unit }}"
            CronExpressionForRecurrence: "{{ CronExpressionForRecurrence }}"
        UseOffPeakWindow: {{ UseOffPeakWindow }}
    - name: OffPeakWindowOptions
      description: |
        Options for a domain's off-peak window, during which OpenSearch Service can perform mandatory configuration changes on the domain.
      value:
        Enabled: {{ Enabled }}
        OffPeakWindow:
          WindowStartTime:
            Hours: {{ Hours }}
            Minutes: {{ Minutes }}
    - name: SoftwareUpdateOptions
      description: |
        Options for configuring service software updates for a domain.
      value:
        AutoSoftwareUpdateEnabled: {{ AutoSoftwareUpdateEnabled }}
        UseLatestServiceSoftwareForBlueGreen: {{ UseLatestServiceSoftwareForBlueGreen }}
    - name: AIMLOptions
      description: |
        Container for parameters required to enable all machine learning features.
      value:
        NaturalLanguageQueryGenerationOptions:
          DesiredState: "{{ DesiredState }}"
        S3VectorsEngine:
          Enabled: {{ Enabled }}
        ServerlessVectorAcceleration:
          Enabled: {{ Enabled }}
    - name: DeploymentStrategyOptions
      description: |
        Specifies the deployment strategy options for the domain.
      value:
        DeploymentStrategy: "{{ DeploymentStrategy }}"
    - name: AutomatedSnapshotPauseOptions
      description: |
        Specifies the automated snapshot pause request options for the domain. Suspending snapshots reduces data protection. You cannot restore your domain to points in time when snapshots are suspended. Use this feature only for short-term operational needs such as migrations or maintenance windows. Maximum suspension duration: 3 days.
      value:
        Enabled: {{ Enabled }}
        StartTime: "{{ StartTime }}"
        EndTime: "{{ EndTime }}"
`}</CodeBlock>

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

Deletes an Amazon OpenSearch Service domain and all of its data. You can't recover a domain after you delete it.

```sql
DELETE FROM aws.opensearch.domains
WHERE domain_name = '{{ domain_name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="cancel_service_software_update"
    values={[
        { label: 'cancel_service_software_update', value: 'cancel_service_software_update' },
        { label: 'start_domain_maintenance', value: 'start_domain_maintenance' },
        { label: 'rollback_service_software_update', value: 'rollback_service_software_update' },
        { label: 'start_service_software_update', value: 'start_service_software_update' },
        { label: 'upgrade_domain', value: 'upgrade_domain' }
    ]}
>
<TabItem value="cancel_service_software_update">

Cancels a scheduled service software update for an Amazon OpenSearch Service domain. You can only perform this operation before the AutomatedUpdateDate and when the domain's UpdateStatus is PENDING_UPDATE. For more information, see Service software updates in Amazon OpenSearch Service.

```sql
EXEC aws.opensearch.domains.cancel_service_software_update 
@region='{{ region }}' --required 
@@json=
'{
"DomainName": "{{ DomainName }}"
}'
;
```
</TabItem>
<TabItem value="start_domain_maintenance">

Starts the node maintenance process on the data node. These processes can include a node reboot, an Opensearch or Elasticsearch process restart, or a Dashboard or Kibana restart.

```sql
EXEC aws.opensearch.domains.start_domain_maintenance 
@domain_name='{{ domain_name }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"Action": "{{ Action }}", 
"NodeId": "{{ NodeId }}"
}'
;
```
</TabItem>
<TabItem value="rollback_service_software_update">

Rolls back a service software update for a domain to the previous version. For more information, see Service software updates in Amazon OpenSearch Service.

```sql
EXEC aws.opensearch.domains.rollback_service_software_update 
@region='{{ region }}' --required 
@@json=
'{
"DomainName": "{{ DomainName }}"
}'
;
```
</TabItem>
<TabItem value="start_service_software_update">

Schedules a service software update for an Amazon OpenSearch Service domain. For more information, see Service software updates in Amazon OpenSearch Service.

```sql
EXEC aws.opensearch.domains.start_service_software_update 
@region='{{ region }}' --required 
@@json=
'{
"DomainName": "{{ DomainName }}", 
"ScheduleAt": "{{ ScheduleAt }}", 
"DesiredStartTime": {{ DesiredStartTime }}
}'
;
```
</TabItem>
<TabItem value="upgrade_domain">

Allows you to either upgrade your Amazon OpenSearch Service domain or perform an upgrade eligibility check to a compatible version of OpenSearch or Elasticsearch.

```sql
EXEC aws.opensearch.domains.upgrade_domain 
@region='{{ region }}' --required 
@@json=
'{
"DomainName": "{{ DomainName }}", 
"TargetVersion": "{{ TargetVersion }}", 
"PerformCheckOnly": {{ PerformCheckOnly }}, 
"AdvancedOptions": "{{ AdvancedOptions }}"
}'
;
```
</TabItem>
</Tabs>
