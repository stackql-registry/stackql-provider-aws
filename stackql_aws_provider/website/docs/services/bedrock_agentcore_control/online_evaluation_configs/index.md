--- 
title: online_evaluation_configs
hide_title: false
hide_table_of_contents: false
keywords:
  - online_evaluation_configs
  - bedrock_agentcore_control
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

Creates, updates, deletes, gets or lists an <code>online_evaluation_configs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="online_evaluation_configs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bedrock_agentcore_control.online_evaluation_configs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_online_evaluation_config"
    values={[
        { label: 'get_online_evaluation_config', value: 'get_online_evaluation_config' },
        { label: 'list_online_evaluation_configs', value: 'list_online_evaluation_configs' }
    ]}
>
<TabItem value="get_online_evaluation_config">

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
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the online evaluation configuration was created.</td>
</tr>
<tr>
    <td><CopyableCode code="data_source_config" /></td>
    <td><code>object</code></td>
    <td>The configuration that specifies where to read agent traces for online evaluation.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the online evaluation configuration. (pattern: &lt;code&gt;.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="evaluation_execution_role_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the IAM role used for evaluation execution. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:iam::(&#91;0-9&#93;&#123;12&#125;)?:role/.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="evaluators" /></td>
    <td><code>array</code></td>
    <td>The list of evaluators applied during online evaluation.</td>
</tr>
<tr>
    <td><CopyableCode code="execution_status" /></td>
    <td><code>string</code></td>
    <td>The execution status indicating whether the online evaluation is currently running. (ENABLED, DISABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="failure_reason" /></td>
    <td><code>string</code></td>
    <td>The reason for failure if the online evaluation configuration execution failed.</td>
</tr>
<tr>
    <td><CopyableCode code="online_evaluation_config_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the online evaluation configuration. (pattern: &lt;code&gt;arn:aws:bedrock-agentcore:&#91;a-z0-9-&#93;+:&#91;0-9&#93;&#123;12&#125;:online-evaluation-config\/&#91;a-zA-Z&#93;&#91;a-zA-Z0-9-_&#93;&#123;0,99&#125;-&#91;a-zA-Z0-9&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="online_evaluation_config_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the online evaluation configuration. (pattern: &lt;code&gt;&#91;a-zA-Z&#93;&#91;a-zA-Z0-9-_&#93;&#123;0,99&#125;-&#91;a-zA-Z0-9&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="online_evaluation_config_name" /></td>
    <td><code>string</code></td>
    <td>The name of the online evaluation configuration. (pattern: &lt;code&gt;&#91;a-zA-Z&#93;&#91;a-zA-Z0-9_&#93;&#123;0,47&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="output_config" /></td>
    <td><code>object</code></td>
    <td>The configuration that specifies where evaluation results should be written for monitoring and analysis.</td>
</tr>
<tr>
    <td><CopyableCode code="rule" /></td>
    <td><code>object</code></td>
    <td>The evaluation rule that defines sampling configuration, filtering criteria, and session detection settings for online evaluation.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the online evaluation configuration. (ACTIVE, CREATING, CREATE_FAILED, UPDATING, UPDATE_FAILED, DELETING, ERROR)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the online evaluation configuration was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_online_evaluation_configs">

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
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the online evaluation configuration was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the online evaluation configuration. (pattern: &lt;code&gt;.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="execution_status" /></td>
    <td><code>string</code></td>
    <td>The execution status indicating whether the online evaluation is currently running. (ENABLED, DISABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="failure_reason" /></td>
    <td><code>string</code></td>
    <td>The reason for failure if the online evaluation configuration execution failed.</td>
</tr>
<tr>
    <td><CopyableCode code="online_evaluation_config_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the online evaluation configuration. (pattern: &lt;code&gt;arn:aws:bedrock-agentcore:&#91;a-z0-9-&#93;+:&#91;0-9&#93;&#123;12&#125;:online-evaluation-config\/&#91;a-zA-Z&#93;&#91;a-zA-Z0-9-_&#93;&#123;0,99&#125;-&#91;a-zA-Z0-9&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="online_evaluation_config_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the online evaluation configuration. (pattern: &lt;code&gt;&#91;a-zA-Z&#93;&#91;a-zA-Z0-9-_&#93;&#123;0,99&#125;-&#91;a-zA-Z0-9&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="online_evaluation_config_name" /></td>
    <td><code>string</code></td>
    <td>The name of the online evaluation configuration. (pattern: &lt;code&gt;&#91;a-zA-Z&#93;&#91;a-zA-Z0-9_&#93;&#123;0,47&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the online evaluation configuration. (ACTIVE, CREATING, CREATE_FAILED, UPDATING, UPDATE_FAILED, DELETING, ERROR)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the online evaluation configuration was last updated.</td>
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
    <td><a href="#get_online_evaluation_config"><CopyableCode code="get_online_evaluation_config" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-online_evaluation_config_id"><code>online_evaluation_config_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves detailed information about an online evaluation configuration, including its rules, data sources, evaluators, and execution status.</td>
</tr>
<tr>
    <td><a href="#list_online_evaluation_configs"><CopyableCode code="list_online_evaluation_configs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists all online evaluation configurations in the account, providing summary information about each configuration's status and settings.</td>
</tr>
<tr>
    <td><a href="#create_online_evaluation_config"><CopyableCode code="create_online_evaluation_config" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-onlineEvaluationConfigName"><code>onlineEvaluationConfigName</code></a>, <a href="#parameter-rule"><code>rule</code></a>, <a href="#parameter-dataSourceConfig"><code>dataSourceConfig</code></a>, <a href="#parameter-evaluators"><code>evaluators</code></a>, <a href="#parameter-evaluationExecutionRoleArn"><code>evaluationExecutionRoleArn</code></a>, <a href="#parameter-enableOnCreate"><code>enableOnCreate</code></a></td>
    <td></td>
    <td>Creates an online evaluation configuration for continuous monitoring of agent performance. Online evaluation automatically samples live traffic from CloudWatch logs at specified rates and applies evaluators to assess agent quality in production.</td>
</tr>
<tr>
    <td><a href="#update_online_evaluation_config"><CopyableCode code="update_online_evaluation_config" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-online_evaluation_config_id"><code>online_evaluation_config_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates an online evaluation configuration's settings, including rules, data sources, evaluators, and execution status. Changes take effect immediately for ongoing evaluations.</td>
</tr>
<tr>
    <td><a href="#delete_online_evaluation_config"><CopyableCode code="delete_online_evaluation_config" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-online_evaluation_config_id"><code>online_evaluation_config_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an online evaluation configuration and stops any ongoing evaluation processes associated with it.</td>
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
<tr id="parameter-online_evaluation_config_id">
    <td><CopyableCode code="online_evaluation_config_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the online evaluation configuration to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of online evaluation configurations to return in a single response.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The pagination token from a previous request to retrieve the next page of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_online_evaluation_config"
    values={[
        { label: 'get_online_evaluation_config', value: 'get_online_evaluation_config' },
        { label: 'list_online_evaluation_configs', value: 'list_online_evaluation_configs' }
    ]}
>
<TabItem value="get_online_evaluation_config">

Retrieves detailed information about an online evaluation configuration, including its rules, data sources, evaluators, and execution status.

```sql
SELECT
created_at,
data_source_config,
description,
evaluation_execution_role_arn,
evaluators,
execution_status,
failure_reason,
online_evaluation_config_arn,
online_evaluation_config_id,
online_evaluation_config_name,
output_config,
rule,
status,
updated_at
FROM aws.bedrock_agentcore_control.online_evaluation_configs
WHERE online_evaluation_config_id = '{{ online_evaluation_config_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_online_evaluation_configs">

Lists all online evaluation configurations in the account, providing summary information about each configuration's status and settings.

```sql
SELECT
created_at,
description,
execution_status,
failure_reason,
online_evaluation_config_arn,
online_evaluation_config_id,
online_evaluation_config_name,
status,
updated_at
FROM aws.bedrock_agentcore_control.online_evaluation_configs
WHERE region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_online_evaluation_config"
    values={[
        { label: 'create_online_evaluation_config', value: 'create_online_evaluation_config' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_online_evaluation_config">

Creates an online evaluation configuration for continuous monitoring of agent performance. Online evaluation automatically samples live traffic from CloudWatch logs at specified rates and applies evaluators to assess agent quality in production.

```sql
INSERT INTO aws.bedrock_agentcore_control.online_evaluation_configs (
clientToken,
onlineEvaluationConfigName,
description,
rule,
dataSourceConfig,
evaluators,
evaluationExecutionRoleArn,
enableOnCreate,
tags,
region
)
SELECT 
'{{ clientToken }}',
'{{ onlineEvaluationConfigName }}' /* required */,
'{{ description }}',
'{{ rule }}' /* required */,
'{{ dataSourceConfig }}' /* required */,
'{{ evaluators }}' /* required */,
'{{ evaluationExecutionRoleArn }}' /* required */,
{{ enableOnCreate }} /* required */,
'{{ tags }}',
'{{ region }}'
RETURNING
created_at,
execution_status,
failure_reason,
online_evaluation_config_arn,
online_evaluation_config_id,
output_config,
status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: online_evaluation_configs
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the online_evaluation_configs resource.
    - name: clientToken
      value: "{{ clientToken }}"
    - name: onlineEvaluationConfigName
      value: "{{ onlineEvaluationConfigName }}"
    - name: description
      value: "{{ description }}"
    - name: rule
      description: |
        The evaluation rule that defines sampling configuration, filtering criteria, and session detection settings for online evaluation.
      value:
        samplingConfig:
          samplingPercentage: {{ samplingPercentage }}
        filters:
          - key: "{{ key }}"
            operator: "{{ operator }}"
            value:
              stringValue: "{{ stringValue }}"
              doubleValue: {{ doubleValue }}
              booleanValue: {{ booleanValue }}
        sessionConfig:
          sessionTimeoutMinutes: {{ sessionTimeoutMinutes }}
    - name: dataSourceConfig
      description: |
        The configuration that specifies where to read agent traces for online evaluation.
      value:
        cloudWatchLogs:
          logGroupNames:
            - "{{ logGroupNames }}"
          serviceNames:
            - "{{ serviceNames }}"
    - name: evaluators
      value:
        - evaluatorId: "{{ evaluatorId }}"
    - name: evaluationExecutionRoleArn
      value: "{{ evaluationExecutionRoleArn }}"
    - name: enableOnCreate
      value: {{ enableOnCreate }}
    - name: tags
      value: "{{ tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_online_evaluation_config"
    values={[
        { label: 'update_online_evaluation_config', value: 'update_online_evaluation_config' }
    ]}
>
<TabItem value="update_online_evaluation_config">

Updates an online evaluation configuration's settings, including rules, data sources, evaluators, and execution status. Changes take effect immediately for ongoing evaluations.

```sql
UPDATE aws.bedrock_agentcore_control.online_evaluation_configs
SET 
clientToken = '{{ clientToken }}',
description = '{{ description }}',
rule = '{{ rule }}',
dataSourceConfig = '{{ dataSourceConfig }}',
evaluators = '{{ evaluators }}',
evaluationExecutionRoleArn = '{{ evaluationExecutionRoleArn }}',
executionStatus = '{{ executionStatus }}'
WHERE 
online_evaluation_config_id = '{{ online_evaluation_config_id }}' --required
AND region = '{{ region }}' --required
RETURNING
execution_status,
failure_reason,
online_evaluation_config_arn,
online_evaluation_config_id,
status,
updated_at;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_online_evaluation_config"
    values={[
        { label: 'delete_online_evaluation_config', value: 'delete_online_evaluation_config' }
    ]}
>
<TabItem value="delete_online_evaluation_config">

Deletes an online evaluation configuration and stops any ongoing evaluation processes associated with it.

```sql
DELETE FROM aws.bedrock_agentcore_control.online_evaluation_configs
WHERE online_evaluation_config_id = '{{ online_evaluation_config_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
