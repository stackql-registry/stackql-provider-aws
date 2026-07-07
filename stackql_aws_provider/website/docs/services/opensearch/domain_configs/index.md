--- 
title: domain_configs
hide_title: false
hide_table_of_contents: false
keywords:
  - domain_configs
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

Creates, updates, deletes, gets or lists a <code>domain_configs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="domain_configs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.opensearch.domain_configs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_domain_config"
    values={[
        { label: 'describe_domain_config', value: 'describe_domain_config' }
    ]}
>
<TabItem value="describe_domain_config">

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
    <td><CopyableCode code="AccessPolicies" /></td>
    <td><code>object</code></td>
    <td>Specifies the access policies for the domain.</td>
</tr>
<tr>
    <td><CopyableCode code="AdvancedOptions" /></td>
    <td><code>object</code></td>
    <td>Key-value pairs to specify advanced configuration options. For more information, see Advanced options.</td>
</tr>
<tr>
    <td><CopyableCode code="AdvancedSecurityOptions" /></td>
    <td><code>object</code></td>
    <td>Container for fine-grained access control settings for the domain.</td>
</tr>
<tr>
    <td><CopyableCode code="AutoTuneOptions" /></td>
    <td><code>object</code></td>
    <td>Container for Auto-Tune settings for the domain.</td>
</tr>
<tr>
    <td><CopyableCode code="AutomatedSnapshotPauseOptions" /></td>
    <td><code>object</code></td>
    <td>Specifies AutomatedSnapshotPauseOptions for the domain.</td>
</tr>
<tr>
    <td><CopyableCode code="ChangeProgressDetails" /></td>
    <td><code>object</code></td>
    <td>Container for information about the progress of an existing configuration change.</td>
</tr>
<tr>
    <td><CopyableCode code="ClusterConfig" /></td>
    <td><code>object</code></td>
    <td>Container for the cluster configuration of a the domain.</td>
</tr>
<tr>
    <td><CopyableCode code="CognitoOptions" /></td>
    <td><code>object</code></td>
    <td>Container for Amazon Cognito options for the domain.</td>
</tr>
<tr>
    <td><CopyableCode code="DeploymentStrategyOptions" /></td>
    <td><code>object</code></td>
    <td>Specifies DeploymentStrategyOptions for the domain.</td>
</tr>
<tr>
    <td><CopyableCode code="DomainEndpointOptions" /></td>
    <td><code>object</code></td>
    <td>Additional options for the domain endpoint, such as whether to require HTTPS for all traffic.</td>
</tr>
<tr>
    <td><CopyableCode code="EBSOptions" /></td>
    <td><code>object</code></td>
    <td>Container for EBS options configured for the domain.</td>
</tr>
<tr>
    <td><CopyableCode code="EncryptionAtRestOptions" /></td>
    <td><code>object</code></td>
    <td>Key-value pairs to enable encryption at rest.</td>
</tr>
<tr>
    <td><CopyableCode code="EngineVersion" /></td>
    <td><code>object</code></td>
    <td>The OpenSearch or Elasticsearch version that the domain is running.</td>
</tr>
<tr>
    <td><CopyableCode code="IPAddressType" /></td>
    <td><code>object</code></td>
    <td>Choose either dual stack or IPv4 as your IP address type. Dual stack allows you to share domain resources across IPv4 and IPv6 address types, and is the recommended option. If you set your IP address type to dual stack, you can't change your address type later.</td>
</tr>
<tr>
    <td><CopyableCode code="IdentityCenterOptions" /></td>
    <td><code>object</code></td>
    <td>Configuration options for enabling and managing IAM Identity Center integration within a domain.</td>
</tr>
<tr>
    <td><CopyableCode code="LogPublishingOptions" /></td>
    <td><code>object</code></td>
    <td>Key-value pairs to configure log publishing.</td>
</tr>
<tr>
    <td><CopyableCode code="ModifyingProperties" /></td>
    <td><code>array</code></td>
    <td>Information about the domain properties that are currently being modified.</td>
</tr>
<tr>
    <td><CopyableCode code="NodeToNodeEncryptionOptions" /></td>
    <td><code>object</code></td>
    <td>Whether node-to-node encryption is enabled or disabled.</td>
</tr>
<tr>
    <td><CopyableCode code="OffPeakWindowOptions" /></td>
    <td><code>object</code></td>
    <td>Container for off-peak window options for the domain.</td>
</tr>
<tr>
    <td><CopyableCode code="SnapshotOptions" /></td>
    <td><code>object</code></td>
    <td>DEPRECATED. Container for parameters required to configure automated snapshots of domain indexes.</td>
</tr>
<tr>
    <td><CopyableCode code="SoftwareUpdateOptions" /></td>
    <td><code>object</code></td>
    <td>Software update options for the domain.</td>
</tr>
<tr>
    <td><CopyableCode code="VPCOptions" /></td>
    <td><code>object</code></td>
    <td>The current VPC options for the domain and the status of any updates to their configuration.</td>
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
    <td><a href="#describe_domain_config"><CopyableCode code="describe_domain_config" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the configuration of an Amazon OpenSearch Service domain.</td>
</tr>
<tr>
    <td><a href="#update_domain_config"><CopyableCode code="update_domain_config" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Modifies the cluster configuration of the specified Amazon OpenSearch Service domain.</td>
</tr>
<tr>
    <td><a href="#cancel_domain_config_change"><CopyableCode code="cancel_domain_config_change" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Cancels a pending configuration change on an Amazon OpenSearch Service domain.</td>
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
    <td></td>
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
    defaultValue="describe_domain_config"
    values={[
        { label: 'describe_domain_config', value: 'describe_domain_config' }
    ]}
>
<TabItem value="describe_domain_config">

Returns the configuration of an Amazon OpenSearch Service domain.

```sql
SELECT
AIMLOptions,
AccessPolicies,
AdvancedOptions,
AdvancedSecurityOptions,
AutoTuneOptions,
AutomatedSnapshotPauseOptions,
ChangeProgressDetails,
ClusterConfig,
CognitoOptions,
DeploymentStrategyOptions,
DomainEndpointOptions,
EBSOptions,
EncryptionAtRestOptions,
EngineVersion,
IPAddressType,
IdentityCenterOptions,
LogPublishingOptions,
ModifyingProperties,
NodeToNodeEncryptionOptions,
OffPeakWindowOptions,
SnapshotOptions,
SoftwareUpdateOptions,
VPCOptions
FROM aws.opensearch.domain_configs
WHERE domain_name = '{{ domain_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_domain_config"
    values={[
        { label: 'update_domain_config', value: 'update_domain_config' }
    ]}
>
<TabItem value="update_domain_config">

Modifies the cluster configuration of the specified Amazon OpenSearch Service domain.

```sql
UPDATE aws.opensearch.domain_configs
SET 
ClusterConfig = '{{ ClusterConfig }}',
EBSOptions = '{{ EBSOptions }}',
SnapshotOptions = '{{ SnapshotOptions }}',
VPCOptions = '{{ VPCOptions }}',
CognitoOptions = '{{ CognitoOptions }}',
AdvancedOptions = '{{ AdvancedOptions }}',
AccessPolicies = '{{ AccessPolicies }}',
IPAddressType = '{{ IPAddressType }}',
LogPublishingOptions = '{{ LogPublishingOptions }}',
EncryptionAtRestOptions = '{{ EncryptionAtRestOptions }}',
DomainEndpointOptions = '{{ DomainEndpointOptions }}',
NodeToNodeEncryptionOptions = '{{ NodeToNodeEncryptionOptions }}',
AdvancedSecurityOptions = '{{ AdvancedSecurityOptions }}',
IdentityCenterOptions = '{{ IdentityCenterOptions }}',
AutoTuneOptions = '{{ AutoTuneOptions }}',
DryRun = {{ DryRun }},
DryRunMode = '{{ DryRunMode }}',
OffPeakWindowOptions = '{{ OffPeakWindowOptions }}',
SoftwareUpdateOptions = '{{ SoftwareUpdateOptions }}',
AIMLOptions = '{{ AIMLOptions }}',
DeploymentStrategyOptions = '{{ DeploymentStrategyOptions }}',
AutomatedSnapshotPauseOptions = '{{ AutomatedSnapshotPauseOptions }}'
WHERE 
domain_name = '{{ domain_name }}' --required
AND region = '{{ region }}' --required
RETURNING
DomainConfig,
DryRunProgressStatus,
DryRunResults;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="cancel_domain_config_change"
    values={[
        { label: 'cancel_domain_config_change', value: 'cancel_domain_config_change' }
    ]}
>
<TabItem value="cancel_domain_config_change">

Cancels a pending configuration change on an Amazon OpenSearch Service domain.

```sql
EXEC aws.opensearch.domain_configs.cancel_domain_config_change 
@domain_name='{{ domain_name }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"DryRun": {{ DryRun }}
}'
;
```
</TabItem>
</Tabs>
