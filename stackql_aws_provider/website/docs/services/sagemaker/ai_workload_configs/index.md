--- 
title: ai_workload_configs
hide_title: false
hide_table_of_contents: false
keywords:
  - ai_workload_configs
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

Creates, updates, deletes, gets or lists an <code>ai_workload_configs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ai_workload_configs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sagemaker.ai_workload_configs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_ai_workload_config"
    values={[
        { label: 'describe_ai_workload_config', value: 'describe_ai_workload_config' },
        { label: 'list_ai_workload_configs', value: 'list_ai_workload_configs' }
    ]}
>
<TabItem value="describe_ai_workload_config">

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
    <td><CopyableCode code="AIWorkloadConfigArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the AI workload configuration. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z0-9\-&#93;*:&#91;0-9&#93;&#123;12&#125;:ai-workload-config/&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,62&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="AIWorkloadConfigName" /></td>
    <td><code>string</code></td>
    <td>The name of the AI workload configuration. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,62&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="AIWorkloadConfigs" /></td>
    <td><code>object</code></td>
    <td>The benchmark tool configuration and workload specification.</td>
</tr>
<tr>
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp that indicates when the AI workload configuration was created.</td>
</tr>
<tr>
    <td><CopyableCode code="DatasetConfig" /></td>
    <td><code>object</code></td>
    <td>The dataset configuration for the workload.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>array</code></td>
    <td>The tags associated with the AI workload configuration.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_ai_workload_configs">

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
    <td><CopyableCode code="AIWorkloadConfigArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the AI workload configuration. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z0-9\-&#93;*:&#91;0-9&#93;&#123;12&#125;:ai-workload-config/&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,62&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="AIWorkloadConfigName" /></td>
    <td><code>string</code></td>
    <td>The name of the AI workload configuration. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,62&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp that indicates when the configuration was created.</td>
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
    <td><a href="#describe_ai_workload_config"><CopyableCode code="describe_ai_workload_config" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns details of an AI workload configuration, including the dataset configuration, benchmark tool settings, tags, and creation time.</td>
</tr>
<tr>
    <td><a href="#list_ai_workload_configs"><CopyableCode code="list_ai_workload_configs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of AI workload configurations in your account. You can filter the results by name and creation time, and sort the results. The response is paginated.</td>
</tr>
<tr>
    <td><a href="#create_ai_workload_config"><CopyableCode code="create_ai_workload_config" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AIWorkloadConfigName"><code>AIWorkloadConfigName</code></a></td>
    <td></td>
    <td>Creates a reusable AI workload configuration that defines datasets, data sources, and benchmark tool settings for consistent performance testing of generative AI inference deployments on Amazon SageMaker AI.</td>
</tr>
<tr>
    <td><a href="#delete_ai_workload_config"><CopyableCode code="delete_ai_workload_config" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified AI workload configuration. You cannot delete a configuration that is referenced by an active benchmark job.</td>
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
    defaultValue="describe_ai_workload_config"
    values={[
        { label: 'describe_ai_workload_config', value: 'describe_ai_workload_config' },
        { label: 'list_ai_workload_configs', value: 'list_ai_workload_configs' }
    ]}
>
<TabItem value="describe_ai_workload_config">

Returns details of an AI workload configuration, including the dataset configuration, benchmark tool settings, tags, and creation time.

```sql
SELECT
AIWorkloadConfigArn,
AIWorkloadConfigName,
AIWorkloadConfigs,
CreationTime,
DatasetConfig,
Tags
FROM aws.sagemaker.ai_workload_configs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_ai_workload_configs">

Returns a list of AI workload configurations in your account. You can filter the results by name and creation time, and sort the results. The response is paginated.

```sql
SELECT
AIWorkloadConfigArn,
AIWorkloadConfigName,
CreationTime
FROM aws.sagemaker.ai_workload_configs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_ai_workload_config"
    values={[
        { label: 'create_ai_workload_config', value: 'create_ai_workload_config' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_ai_workload_config">

Creates a reusable AI workload configuration that defines datasets, data sources, and benchmark tool settings for consistent performance testing of generative AI inference deployments on Amazon SageMaker AI.

```sql
INSERT INTO aws.sagemaker.ai_workload_configs (
AIWorkloadConfigName,
DatasetConfig,
AIWorkloadConfigs,
Tags,
region
)
SELECT 
'{{ AIWorkloadConfigName }}' /* required */,
'{{ DatasetConfig }}',
'{{ AIWorkloadConfigs }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
AIWorkloadConfigArn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: ai_workload_configs
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the ai_workload_configs resource.
    - name: AIWorkloadConfigName
      value: "{{ AIWorkloadConfigName }}"
      description: |
        The name of the AI workload configuration. The name must be unique within your Amazon Web Services account in the current Amazon Web Services Region.
    - name: DatasetConfig
      description: |
        The dataset configuration for the workload. Specify input data channels with their data sources for benchmark workloads.
      value:
        InputDataConfig:
          - ChannelName: "{{ ChannelName }}"
            DataSource:
              S3DataSource:
                S3Uri: "{{ S3Uri }}"
    - name: AIWorkloadConfigs
      description: |
        The benchmark tool configuration and workload specification. Provide the specification as an inline YAML or JSON string.
      value:
        WorkloadSpec:
          Inline: "{{ Inline }}"
    - name: Tags
      description: |
        The metadata that you apply to Amazon Web Services resources to help you categorize and organize them. Each tag consists of a key and a value, both of which you define. For more information, see Tagging Amazon Web Services Resources in the Amazon Web Services General Reference.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_ai_workload_config"
    values={[
        { label: 'delete_ai_workload_config', value: 'delete_ai_workload_config' }
    ]}
>
<TabItem value="delete_ai_workload_config">

Deletes the specified AI workload configuration. You cannot delete a configuration that is referenced by an active benchmark job.

```sql
DELETE FROM aws.sagemaker.ai_workload_configs
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
