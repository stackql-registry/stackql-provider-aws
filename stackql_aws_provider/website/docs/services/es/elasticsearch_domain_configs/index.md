--- 
title: elasticsearch_domain_configs
hide_title: false
hide_table_of_contents: false
keywords:
  - elasticsearch_domain_configs
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

Creates, updates, deletes, gets or lists an <code>elasticsearch_domain_configs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="elasticsearch_domain_configs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.es.elasticsearch_domain_configs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_elasticsearch_domain_config"
    values={[
        { label: 'describe_elasticsearch_domain_config', value: 'describe_elasticsearch_domain_config' }
    ]}
>
<TabItem value="describe_elasticsearch_domain_config">

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
    <td><CopyableCode code="access_policies" /></td>
    <td><code>object</code></td>
    <td>IAM access policy as a JSON-formatted string.</td>
</tr>
<tr>
    <td><CopyableCode code="advanced_options" /></td>
    <td><code>object</code></td>
    <td>Specifies the AdvancedOptions for the domain. See Configuring Advanced Options for more information.</td>
</tr>
<tr>
    <td><CopyableCode code="advanced_security_options" /></td>
    <td><code>object</code></td>
    <td>Specifies AdvancedSecurityOptions for the domain.</td>
</tr>
<tr>
    <td><CopyableCode code="auto_tune_options" /></td>
    <td><code>object</code></td>
    <td>Specifies AutoTuneOptions for the domain.</td>
</tr>
<tr>
    <td><CopyableCode code="automated_snapshot_pause_options" /></td>
    <td><code>object</code></td>
    <td>Specifies AutomatedSnapshotPauseOptions for the domain.</td>
</tr>
<tr>
    <td><CopyableCode code="change_progress_details" /></td>
    <td><code>object</code></td>
    <td>Specifies change details of the domain configuration change.</td>
</tr>
<tr>
    <td><CopyableCode code="cognito_options" /></td>
    <td><code>object</code></td>
    <td>The CognitoOptions for the specified domain. For more information, see Amazon Cognito Authentication for Kibana.</td>
</tr>
<tr>
    <td><CopyableCode code="deployment_strategy_options" /></td>
    <td><code>object</code></td>
    <td>Specifies DeploymentStrategyOptions for the domain.</td>
</tr>
<tr>
    <td><CopyableCode code="domain_endpoint_options" /></td>
    <td><code>object</code></td>
    <td>Specifies the DomainEndpointOptions for the Elasticsearch domain.</td>
</tr>
<tr>
    <td><CopyableCode code="ebs_options" /></td>
    <td><code>object</code></td>
    <td>Specifies the EBSOptions for the Elasticsearch domain.</td>
</tr>
<tr>
    <td><CopyableCode code="elasticsearch_cluster_config" /></td>
    <td><code>object</code></td>
    <td>Specifies the ElasticsearchClusterConfig for the Elasticsearch domain.</td>
</tr>
<tr>
    <td><CopyableCode code="elasticsearch_version" /></td>
    <td><code>object</code></td>
    <td>String of format X.Y to specify version for the Elasticsearch domain.</td>
</tr>
<tr>
    <td><CopyableCode code="encryption_at_rest_options" /></td>
    <td><code>object</code></td>
    <td>Specifies the EncryptionAtRestOptions for the Elasticsearch domain.</td>
</tr>
<tr>
    <td><CopyableCode code="engine_mode" /></td>
    <td><code>object</code></td>
    <td>The engine mode configured for the domain.</td>
</tr>
<tr>
    <td><CopyableCode code="log_publishing_options" /></td>
    <td><code>object</code></td>
    <td>Log publishing options for the given domain.</td>
</tr>
<tr>
    <td><CopyableCode code="modifying_properties" /></td>
    <td><code>array</code></td>
    <td>Information about the domain properties that are currently being modified.</td>
</tr>
<tr>
    <td><CopyableCode code="node_to_node_encryption_options" /></td>
    <td><code>object</code></td>
    <td>Specifies the NodeToNodeEncryptionOptions for the Elasticsearch domain.</td>
</tr>
<tr>
    <td><CopyableCode code="snapshot_options" /></td>
    <td><code>object</code></td>
    <td>Specifies the SnapshotOptions for the Elasticsearch domain.</td>
</tr>
<tr>
    <td><CopyableCode code="use_case" /></td>
    <td><code>object</code></td>
    <td>The use case configured for the domain.</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_options" /></td>
    <td><code>object</code></td>
    <td>The VPCOptions for the specified domain. For more information, see VPC Endpoints for Amazon Elasticsearch Service Domains.</td>
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
    <td><a href="#describe_elasticsearch_domain_config"><CopyableCode code="describe_elasticsearch_domain_config" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides cluster configuration information about the specified Elasticsearch domain, such as the state, creation date, update version, and update date for cluster options.</td>
</tr>
<tr>
    <td><a href="#update_elasticsearch_domain_config"><CopyableCode code="update_elasticsearch_domain_config" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Modifies the cluster configuration of the specified Elasticsearch domain, setting as setting the instance type and the number of instances.</td>
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
    <td>The name of the Elasticsearch domain that you are updating.</td>
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
    defaultValue="describe_elasticsearch_domain_config"
    values={[
        { label: 'describe_elasticsearch_domain_config', value: 'describe_elasticsearch_domain_config' }
    ]}
>
<TabItem value="describe_elasticsearch_domain_config">

Provides cluster configuration information about the specified Elasticsearch domain, such as the state, creation date, update version, and update date for cluster options.

```sql
SELECT
access_policies,
advanced_options,
advanced_security_options,
auto_tune_options,
automated_snapshot_pause_options,
change_progress_details,
cognito_options,
deployment_strategy_options,
domain_endpoint_options,
ebs_options,
elasticsearch_cluster_config,
elasticsearch_version,
encryption_at_rest_options,
engine_mode,
log_publishing_options,
modifying_properties,
node_to_node_encryption_options,
snapshot_options,
use_case,
vpc_options
FROM aws.es.elasticsearch_domain_configs
WHERE domain_name = '{{ domain_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_elasticsearch_domain_config"
    values={[
        { label: 'update_elasticsearch_domain_config', value: 'update_elasticsearch_domain_config' }
    ]}
>
<TabItem value="update_elasticsearch_domain_config">

Modifies the cluster configuration of the specified Elasticsearch domain, setting as setting the instance type and the number of instances.

```sql
UPDATE aws.es.elasticsearch_domain_configs
SET 
ElasticsearchClusterConfig = '{{ ElasticsearchClusterConfig }}',
EBSOptions = '{{ EBSOptions }}',
SnapshotOptions = '{{ SnapshotOptions }}',
VPCOptions = '{{ VPCOptions }}',
CognitoOptions = '{{ CognitoOptions }}',
AdvancedOptions = '{{ AdvancedOptions }}',
AccessPolicies = '{{ AccessPolicies }}',
LogPublishingOptions = '{{ LogPublishingOptions }}',
DomainEndpointOptions = '{{ DomainEndpointOptions }}',
AdvancedSecurityOptions = '{{ AdvancedSecurityOptions }}',
NodeToNodeEncryptionOptions = '{{ NodeToNodeEncryptionOptions }}',
EncryptionAtRestOptions = '{{ EncryptionAtRestOptions }}',
AutoTuneOptions = '{{ AutoTuneOptions }}',
DryRun = {{ DryRun }},
DeploymentStrategyOptions = '{{ DeploymentStrategyOptions }}',
AutomatedSnapshotPauseOptions = '{{ AutomatedSnapshotPauseOptions }}',
UseCase = '{{ UseCase }}',
EngineMode = '{{ EngineMode }}'
WHERE 
domain_name = '{{ domain_name }}' --required
AND region = '{{ region }}' --required
RETURNING
domain_config,
dry_run_results;
```
</TabItem>
</Tabs>
