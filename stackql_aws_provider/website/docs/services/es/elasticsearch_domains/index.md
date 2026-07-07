--- 
title: elasticsearch_domains
hide_title: false
hide_table_of_contents: false
keywords:
  - elasticsearch_domains
  - es
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

Creates, updates, deletes, gets or lists an <code>elasticsearch_domains</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="elasticsearch_domains" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.es.elasticsearch_domains" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_elasticsearch_domain"
    values={[
        { label: 'describe_elasticsearch_domain', value: 'describe_elasticsearch_domain' },
        { label: 'describe_elasticsearch_domains', value: 'describe_elasticsearch_domains' }
    ]}
>
<TabItem value="describe_elasticsearch_domain">

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
    <td><CopyableCode code="ARN" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Elasticsearch domain. See Identifiers for IAM Entities in Using AWS Identity and Access Management for more information.</td>
</tr>
<tr>
    <td><CopyableCode code="AccessPolicies" /></td>
    <td><code>string</code></td>
    <td>Access policy rules for an Elasticsearch domain service endpoints. For more information, see Configuring Access Policies in the Amazon Elasticsearch Service Developer Guide. The maximum size of a policy document is 100 KB.</td>
</tr>
<tr>
    <td><CopyableCode code="AdvancedOptions" /></td>
    <td><code>object</code></td>
    <td>Specifies the status of the AdvancedOptions</td>
</tr>
<tr>
    <td><CopyableCode code="AdvancedSecurityOptions" /></td>
    <td><code>object</code></td>
    <td>The current status of the Elasticsearch domain's advanced security options.</td>
</tr>
<tr>
    <td><CopyableCode code="AutoTuneOptions" /></td>
    <td><code>object</code></td>
    <td>The current status of the Elasticsearch domain's Auto-Tune options.</td>
</tr>
<tr>
    <td><CopyableCode code="AutomatedSnapshotPauseOptions" /></td>
    <td><code>object</code></td>
    <td>The current status of the Elasticsearch domain's automated snapshot pause options.</td>
</tr>
<tr>
    <td><CopyableCode code="ChangeProgressDetails" /></td>
    <td><code>object</code></td>
    <td>Specifies change details of the domain configuration change.</td>
</tr>
<tr>
    <td><CopyableCode code="CognitoOptions" /></td>
    <td><code>object</code></td>
    <td>Options to specify the Cognito user and identity pools for Kibana authentication. For more information, see Amazon Cognito Authentication for Kibana.</td>
</tr>
<tr>
    <td><CopyableCode code="Created" /></td>
    <td><code>boolean</code></td>
    <td>The domain creation status. True if the creation of an Elasticsearch domain is complete. False if domain creation is still in progress.</td>
</tr>
<tr>
    <td><CopyableCode code="Deleted" /></td>
    <td><code>boolean</code></td>
    <td>The domain deletion status. True if a delete request has been received for the domain but resource cleanup is still in progress. False if the domain has not been deleted. Once domain deletion is complete, the status of the domain is no longer returned.</td>
</tr>
<tr>
    <td><CopyableCode code="DeploymentStrategyOptions" /></td>
    <td><code>object</code></td>
    <td>Specifies the deployment strategy options for the domain.</td>
</tr>
<tr>
    <td><CopyableCode code="DomainEndpointOptions" /></td>
    <td><code>object</code></td>
    <td>Options to configure endpoint for the Elasticsearch domain.</td>
</tr>
<tr>
    <td><CopyableCode code="DomainId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the specified Elasticsearch domain.</td>
</tr>
<tr>
    <td><CopyableCode code="DomainName" /></td>
    <td><code>string</code></td>
    <td>The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen). (pattern: &lt;code&gt;&#91;a-z&#93;&#91;a-z0-9\-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="DomainProcessingStatus" /></td>
    <td><code>string</code></td>
    <td>The status of any changes that are currently in progress for the domain. (Creating, Active, Modifying, UpgradingEngineVersion, UpdatingServiceSoftware, Isolated, Deleting)</td>
</tr>
<tr>
    <td><CopyableCode code="EBSOptions" /></td>
    <td><code>object</code></td>
    <td>Options to enable, disable, and specify the properties of EBS storage volumes. For more information, see Configuring EBS-based Storage.</td>
</tr>
<tr>
    <td><CopyableCode code="ElasticsearchClusterConfig" /></td>
    <td><code>object</code></td>
    <td>Specifies the configuration for the domain cluster, such as the type and number of instances.</td>
</tr>
<tr>
    <td><CopyableCode code="ElasticsearchVersion" /></td>
    <td><code>string</code></td>
    <td> (pattern: &lt;code&gt;^&#91;0-9&#93;&#123;1&#125;\.&#91;0-9&#93;&#123;1,2&#125;$|^OpenSearch_&#91;0-9&#93;&#123;1,2&#125;\.&#91;0-9&#93;&#123;1,2&#125;$|^OS_&#91;0-9&#93;&#123;1,2&#125;\.&#91;0-9&#93;&#123;1,2&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="EncryptionAtRestOptions" /></td>
    <td><code>object</code></td>
    <td>Specifies the Encryption At Rest Options.</td>
</tr>
<tr>
    <td><CopyableCode code="Endpoint" /></td>
    <td><code>string</code></td>
    <td>The Elasticsearch domain endpoint that you use to submit index and search requests.</td>
</tr>
<tr>
    <td><CopyableCode code="Endpoints" /></td>
    <td><code>object</code></td>
    <td>Map containing the Elasticsearch domain endpoints used to submit index and search requests. Example key, value: 'vpc','vpc-endpoint-h2dsd34efgyghrtguk5gt6j2foh4.us-east-1.es.amazonaws.com'.</td>
</tr>
<tr>
    <td><CopyableCode code="LogPublishingOptions" /></td>
    <td><code>object</code></td>
    <td>Log publishing options for the given domain.</td>
</tr>
<tr>
    <td><CopyableCode code="ModifyingProperties" /></td>
    <td><code>array</code></td>
    <td>Information about the domain properties that are currently being modified.</td>
</tr>
<tr>
    <td><CopyableCode code="NodeToNodeEncryptionOptions" /></td>
    <td><code>object</code></td>
    <td>Specifies the node-to-node encryption options.</td>
</tr>
<tr>
    <td><CopyableCode code="Processing" /></td>
    <td><code>boolean</code></td>
    <td>The status of the Elasticsearch domain configuration. True if Amazon Elasticsearch Service is processing configuration changes. False if the configuration is active.</td>
</tr>
<tr>
    <td><CopyableCode code="ServiceSoftwareOptions" /></td>
    <td><code>object</code></td>
    <td>The current status of the Elasticsearch domain's service software.</td>
</tr>
<tr>
    <td><CopyableCode code="SnapshotOptions" /></td>
    <td><code>object</code></td>
    <td>Specifies the time, in UTC format, when the service takes a daily automated snapshot of the specified Elasticsearch domain. Default value is 0 hours.</td>
</tr>
<tr>
    <td><CopyableCode code="UpgradeProcessing" /></td>
    <td><code>boolean</code></td>
    <td>The status of an Elasticsearch domain version upgrade. True if Amazon Elasticsearch Service is undergoing a version upgrade. False if the configuration is active.</td>
</tr>
<tr>
    <td><CopyableCode code="VPCOptions" /></td>
    <td><code>object</code></td>
    <td>The VPCOptions for the specified domain. For more information, see VPC Endpoints for Amazon Elasticsearch Service Domains.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="describe_elasticsearch_domains">

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
    <td>The status of the domains requested in the DescribeElasticsearchDomains request.</td>
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
    <td><a href="#describe_elasticsearch_domain"><CopyableCode code="describe_elasticsearch_domain" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns domain configuration information about the specified Elasticsearch domain, including the domain ID, domain endpoint, and domain ARN.</td>
</tr>
<tr>
    <td><a href="#describe_elasticsearch_domains"><CopyableCode code="describe_elasticsearch_domains" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns domain configuration information about the specified Elasticsearch domains, including the domain ID, domain endpoint, and domain ARN.</td>
</tr>
<tr>
    <td><a href="#create_elasticsearch_domain"><CopyableCode code="create_elasticsearch_domain" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DomainName"><code>DomainName</code></a></td>
    <td></td>
    <td>Creates a new Elasticsearch domain. For more information, see Creating Elasticsearch Domains in the Amazon Elasticsearch Service Developer Guide.</td>
</tr>
<tr>
    <td><a href="#delete_elasticsearch_domain"><CopyableCode code="delete_elasticsearch_domain" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Permanently deletes the specified Elasticsearch domain and all of its data. Once a domain is deleted, it cannot be recovered.</td>
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
    <td>The name of the Elasticsearch domain that you want to permanently delete.</td>
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
    defaultValue="describe_elasticsearch_domain"
    values={[
        { label: 'describe_elasticsearch_domain', value: 'describe_elasticsearch_domain' },
        { label: 'describe_elasticsearch_domains', value: 'describe_elasticsearch_domains' }
    ]}
>
<TabItem value="describe_elasticsearch_domain">

Returns domain configuration information about the specified Elasticsearch domain, including the domain ID, domain endpoint, and domain ARN.

```sql
SELECT
ARN,
AccessPolicies,
AdvancedOptions,
AdvancedSecurityOptions,
AutoTuneOptions,
AutomatedSnapshotPauseOptions,
ChangeProgressDetails,
CognitoOptions,
Created,
Deleted,
DeploymentStrategyOptions,
DomainEndpointOptions,
DomainId,
DomainName,
DomainProcessingStatus,
EBSOptions,
ElasticsearchClusterConfig,
ElasticsearchVersion,
EncryptionAtRestOptions,
Endpoint,
Endpoints,
LogPublishingOptions,
ModifyingProperties,
NodeToNodeEncryptionOptions,
Processing,
ServiceSoftwareOptions,
SnapshotOptions,
UpgradeProcessing,
VPCOptions
FROM aws.es.elasticsearch_domains
WHERE domain_name = '{{ domain_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="describe_elasticsearch_domains">

Returns domain configuration information about the specified Elasticsearch domains, including the domain ID, domain endpoint, and domain ARN.

```sql
SELECT
DomainStatusList
FROM aws.es.elasticsearch_domains
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_elasticsearch_domain"
    values={[
        { label: 'create_elasticsearch_domain', value: 'create_elasticsearch_domain' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_elasticsearch_domain">

Creates a new Elasticsearch domain. For more information, see Creating Elasticsearch Domains in the Amazon Elasticsearch Service Developer Guide.

```sql
INSERT INTO aws.es.elasticsearch_domains (
DomainName,
ElasticsearchVersion,
ElasticsearchClusterConfig,
EBSOptions,
AccessPolicies,
SnapshotOptions,
VPCOptions,
CognitoOptions,
EncryptionAtRestOptions,
NodeToNodeEncryptionOptions,
AdvancedOptions,
LogPublishingOptions,
DomainEndpointOptions,
AdvancedSecurityOptions,
AutoTuneOptions,
TagList,
DeploymentStrategyOptions,
AutomatedSnapshotPauseOptions,
region
)
SELECT 
'{{ DomainName }}' /* required */,
'{{ ElasticsearchVersion }}',
'{{ ElasticsearchClusterConfig }}',
'{{ EBSOptions }}',
'{{ AccessPolicies }}',
'{{ SnapshotOptions }}',
'{{ VPCOptions }}',
'{{ CognitoOptions }}',
'{{ EncryptionAtRestOptions }}',
'{{ NodeToNodeEncryptionOptions }}',
'{{ AdvancedOptions }}',
'{{ LogPublishingOptions }}',
'{{ DomainEndpointOptions }}',
'{{ AdvancedSecurityOptions }}',
'{{ AutoTuneOptions }}',
'{{ TagList }}',
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
- name: elasticsearch_domains
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the elasticsearch_domains resource.
    - name: DomainName
      value: "{{ DomainName }}"
      description: |
        The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
    - name: ElasticsearchVersion
      value: "{{ ElasticsearchVersion }}"
    - name: ElasticsearchClusterConfig
      description: |
        Specifies the configuration for the domain cluster, such as the type and number of instances.
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
    - name: EBSOptions
      description: |
        Options to enable, disable, and specify the properties of EBS storage volumes. For more information, see Configuring EBS-based Storage.
      value:
        EBSEnabled: {{ EBSEnabled }}
        VolumeType: "{{ VolumeType }}"
        VolumeSize: {{ VolumeSize }}
        Iops: {{ Iops }}
        Throughput: {{ Throughput }}
    - name: AccessPolicies
      value: "{{ AccessPolicies }}"
      description: |
        Access policy rules for an Elasticsearch domain service endpoints. For more information, see Configuring Access Policies in the Amazon Elasticsearch Service Developer Guide. The maximum size of a policy document is 100 KB.
    - name: SnapshotOptions
      description: |
        Specifies the time, in UTC format, when the service takes a daily automated snapshot of the specified Elasticsearch domain. Default value is 0 hours.
      value:
        AutomatedSnapshotStartHour: {{ AutomatedSnapshotStartHour }}
    - name: VPCOptions
      description: |
        Options to specify the subnets and security groups for VPC endpoint. For more information, see VPC Endpoints for Amazon Elasticsearch Service Domains.
      value:
        SubnetIds:
          - "{{ SubnetIds }}"
        SecurityGroupIds:
          - "{{ SecurityGroupIds }}"
    - name: CognitoOptions
      description: |
        Options to specify the Cognito user and identity pools for Kibana authentication. For more information, see Amazon Cognito Authentication for Kibana.
      value:
        Enabled: {{ Enabled }}
        UserPoolId: "{{ UserPoolId }}"
        IdentityPoolId: "{{ IdentityPoolId }}"
        RoleArn: "{{ RoleArn }}"
    - name: EncryptionAtRestOptions
      description: |
        Specifies the Encryption At Rest Options.
      value:
        Enabled: {{ Enabled }}
        KmsKeyId: "{{ KmsKeyId }}"
    - name: NodeToNodeEncryptionOptions
      description: |
        Specifies the node-to-node encryption options.
      value:
        Enabled: {{ Enabled }}
    - name: AdvancedOptions
      value: "{{ AdvancedOptions }}"
      description: |
        Exposes select native Elasticsearch configuration values from elasticsearch.yml. Currently, the following advanced options are available: Option to allow references to indices in an HTTP request body. Must be false when configuring access to individual sub-resources. By default, the value is true. See Configuration Advanced Options for more information. Option to specify the percentage of heap space that is allocated to field data. By default, this setting is unbounded. For more information, see Configuring Advanced Options.
    - name: LogPublishingOptions
      value: "{{ LogPublishingOptions }}"
    - name: DomainEndpointOptions
      description: |
        Options to configure endpoint for the Elasticsearch domain.
      value:
        EnforceHTTPS: {{ EnforceHTTPS }}
        TLSSecurityPolicy: "{{ TLSSecurityPolicy }}"
        CustomEndpointEnabled: {{ CustomEndpointEnabled }}
        CustomEndpoint: "{{ CustomEndpoint }}"
        CustomEndpointCertificateArn: "{{ CustomEndpointCertificateArn }}"
    - name: AdvancedSecurityOptions
      description: |
        Specifies the advanced security configuration: whether advanced security is enabled, whether the internal database option is enabled, master username and password (if internal database is enabled), and master user ARN (if IAM is enabled).
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
        AnonymousAuthEnabled: {{ AnonymousAuthEnabled }}
    - name: AutoTuneOptions
      description: |
        Specifies the Auto-Tune options: the Auto-Tune desired state for the domain and list of maintenance schedules.
      value:
        DesiredState: "{{ DesiredState }}"
        MaintenanceSchedules:
          - StartAt: "{{ StartAt }}"
            Duration:
              Value: {{ Value }}
              Unit: "{{ Unit }}"
            CronExpressionForRecurrence: "{{ CronExpressionForRecurrence }}"
    - name: TagList
      description: |
        A list of Tag
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
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
    defaultValue="delete_elasticsearch_domain"
    values={[
        { label: 'delete_elasticsearch_domain', value: 'delete_elasticsearch_domain' }
    ]}
>
<TabItem value="delete_elasticsearch_domain">

Permanently deletes the specified Elasticsearch domain and all of its data. Once a domain is deleted, it cannot be recovered.

```sql
DELETE FROM aws.es.elasticsearch_domains
WHERE domain_name = '{{ domain_name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
