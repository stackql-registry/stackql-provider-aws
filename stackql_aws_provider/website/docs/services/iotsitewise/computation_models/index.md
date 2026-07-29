--- 
title: computation_models
hide_title: false
hide_table_of_contents: false
keywords:
  - computation_models
  - iotsitewise
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

Creates, updates, deletes, gets or lists a <code>computation_models</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="computation_models" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iotsitewise.computation_models" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_computation_model"
    values={[
        { label: 'describe_computation_model', value: 'describe_computation_model' },
        { label: 'list_computation_models', value: 'list_computation_models' }
    ]}
>
<TabItem value="describe_computation_model">

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
    <td><CopyableCode code="action_definitions" /></td>
    <td><code>array</code></td>
    <td>The available actions for this computation model.</td>
</tr>
<tr>
    <td><CopyableCode code="computation_model_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the computation model, which has the following format. arn:$&#123;Partition&#125;:iotsitewise:$&#123;Region&#125;:$&#123;Account&#125;:computation-model/$&#123;ComputationModelId&#125; (pattern: &lt;code&gt;^arn:aws(-cn|-us-gov)?:&#91;a-zA-Z0-9-:\/_\.&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="computation_model_configuration" /></td>
    <td><code>object</code></td>
    <td>The configuration for the computation model.</td>
</tr>
<tr>
    <td><CopyableCode code="computation_model_creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The model creation date, in Unix epoch time.</td>
</tr>
<tr>
    <td><CopyableCode code="computation_model_data_binding" /></td>
    <td><code>object</code></td>
    <td>The data binding for the computation model. Key is a variable name defined in configuration. Value is a ComputationModelDataBindingValue referenced by the variable.</td>
</tr>
<tr>
    <td><CopyableCode code="computation_model_description" /></td>
    <td><code>string</code></td>
    <td>The description of the computation model. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9 _\-#$*!@&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="computation_model_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the computation model. (pattern: &lt;code&gt;^(?!00000000-0000-0000-0000-000000000000)&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="computation_model_last_update_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date the model was last updated, in Unix epoch time.</td>
</tr>
<tr>
    <td><CopyableCode code="computation_model_name" /></td>
    <td><code>string</code></td>
    <td>The name of the computation model. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9 _\-#$*!@&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="computation_model_status" /></td>
    <td><code>object</code></td>
    <td>The current status of the asset model, which contains a state and an error message if any.</td>
</tr>
<tr>
    <td><CopyableCode code="computation_model_version" /></td>
    <td><code>string</code></td>
    <td>The version of the computation model. (pattern: &lt;code&gt;^(0|(&#91;1-9&#93;&#123;1&#125;\d*))$&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_computation_models">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the computation model. (pattern: &lt;code&gt;^(?!00000000-0000-0000-0000-000000000000)&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the computation model. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9 _\-#$*!@&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the computation model, which has the following format. arn:$&#123;Partition&#125;:iotsitewise:$&#123;Region&#125;:$&#123;Account&#125;:computation-model/$&#123;ComputationModelId&#125; (pattern: &lt;code&gt;^arn:aws(-cn|-us-gov)?:&#91;a-zA-Z0-9-:\/_\.&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The model creation date, in Unix epoch time.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the computation model. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9 _\-#$*!@&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_update_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the model was last updated, in Unix epoch time.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>object</code></td>
    <td>The current status of the computation model.</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>The type of the computation model. (ANOMALY_DETECTION)</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>The version of the computation model. (pattern: &lt;code&gt;^(0|(&#91;1-9&#93;&#123;1&#125;\d*))$&lt;/code&gt;)</td>
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
    <td><a href="#describe_computation_model"><CopyableCode code="describe_computation_model" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-computation_model_id"><code>computation_model_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-computationModelVersion"><code>computationModelVersion</code></a></td>
    <td>Retrieves information about a computation model.</td>
</tr>
<tr>
    <td><a href="#list_computation_models"><CopyableCode code="list_computation_models" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-computationModelType"><code>computationModelType</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Retrieves a paginated list of summaries of all computation models.</td>
</tr>
<tr>
    <td><a href="#create_computation_model"><CopyableCode code="create_computation_model" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-computationModelName"><code>computationModelName</code></a>, <a href="#parameter-computationModelConfiguration"><code>computationModelConfiguration</code></a>, <a href="#parameter-computationModelDataBinding"><code>computationModelDataBinding</code></a></td>
    <td></td>
    <td>Create a computation model with a configuration and data binding.</td>
</tr>
<tr>
    <td><a href="#update_computation_model"><CopyableCode code="update_computation_model" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-computation_model_id"><code>computation_model_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-computationModelName"><code>computationModelName</code></a>, <a href="#parameter-computationModelConfiguration"><code>computationModelConfiguration</code></a>, <a href="#parameter-computationModelDataBinding"><code>computationModelDataBinding</code></a></td>
    <td></td>
    <td>Updates the computation model.</td>
</tr>
<tr>
    <td><a href="#delete_computation_model"><CopyableCode code="delete_computation_model" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-computation_model_id"><code>computation_model_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-clientToken"><code>clientToken</code></a></td>
    <td>Deletes a computation model. This action can't be undone.</td>
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
<tr id="parameter-computation_model_id">
    <td><CopyableCode code="computation_model_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the computation model.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-clientToken">
    <td><CopyableCode code="clientToken" /></td>
    <td><code>string</code></td>
    <td>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.</td>
</tr>
<tr id="parameter-computationModelType">
    <td><CopyableCode code="computationModelType" /></td>
    <td><code>string</code></td>
    <td>The type of computation model. If a computationModelType is not provided, all types of computation models are returned.</td>
</tr>
<tr id="parameter-computationModelVersion">
    <td><CopyableCode code="computationModelVersion" /></td>
    <td><code>string</code></td>
    <td>The version of the computation model.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return for each paginated request.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token to be used for the next set of paginated results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_computation_model"
    values={[
        { label: 'describe_computation_model', value: 'describe_computation_model' },
        { label: 'list_computation_models', value: 'list_computation_models' }
    ]}
>
<TabItem value="describe_computation_model">

Retrieves information about a computation model.

```sql
SELECT
action_definitions,
computation_model_arn,
computation_model_configuration,
computation_model_creation_date,
computation_model_data_binding,
computation_model_description,
computation_model_id,
computation_model_last_update_date,
computation_model_name,
computation_model_status,
computation_model_version
FROM aws.iotsitewise.computation_models
WHERE computation_model_id = '{{ computation_model_id }}' -- required
AND region = '{{ region }}' -- required
AND computationModelVersion = '{{ computationModelVersion }}'
;
```
</TabItem>
<TabItem value="list_computation_models">

Retrieves a paginated list of summaries of all computation models.

```sql
SELECT
id,
name,
arn,
creation_date,
description,
last_update_date,
status,
type_,
version
FROM aws.iotsitewise.computation_models
WHERE region = '{{ region }}' -- required
AND computationModelType = '{{ computationModelType }}'
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_computation_model"
    values={[
        { label: 'create_computation_model', value: 'create_computation_model' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_computation_model">

Create a computation model with a configuration and data binding.

```sql
INSERT INTO aws.iotsitewise.computation_models (
computationModelName,
computationModelDescription,
computationModelConfiguration,
computationModelDataBinding,
clientToken,
tags,
region
)
SELECT 
'{{ computationModelName }}' /* required */,
'{{ computationModelDescription }}',
'{{ computationModelConfiguration }}' /* required */,
'{{ computationModelDataBinding }}' /* required */,
'{{ clientToken }}',
'{{ tags }}',
'{{ region }}'
RETURNING
computation_model_arn,
computation_model_id,
computation_model_status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: computation_models
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the computation_models resource.
    - name: computationModelName
      value: "{{ computationModelName }}"
    - name: computationModelDescription
      value: "{{ computationModelDescription }}"
    - name: computationModelConfiguration
      description: |
        The configuration for the computation model.
      value:
        anomalyDetection:
          inputProperties: "{{ inputProperties }}"
          resultProperty: "{{ resultProperty }}"
    - name: computationModelDataBinding
      value: "{{ computationModelDataBinding }}"
    - name: clientToken
      value: "{{ clientToken }}"
    - name: tags
      value: "{{ tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_computation_model"
    values={[
        { label: 'update_computation_model', value: 'update_computation_model' }
    ]}
>
<TabItem value="update_computation_model">

Updates the computation model.

```sql
UPDATE aws.iotsitewise.computation_models
SET 
computationModelName = '{{ computationModelName }}',
computationModelDescription = '{{ computationModelDescription }}',
computationModelConfiguration = '{{ computationModelConfiguration }}',
computationModelDataBinding = '{{ computationModelDataBinding }}',
clientToken = '{{ clientToken }}'
WHERE 
computation_model_id = '{{ computation_model_id }}' --required
AND region = '{{ region }}' --required
AND computationModelName = '{{ computationModelName }}' --required
AND computationModelConfiguration = '{{ computationModelConfiguration }}' --required
AND computationModelDataBinding = '{{ computationModelDataBinding }}' --required
RETURNING
computation_model_status;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_computation_model"
    values={[
        { label: 'delete_computation_model', value: 'delete_computation_model' }
    ]}
>
<TabItem value="delete_computation_model">

Deletes a computation model. This action can't be undone.

```sql
DELETE FROM aws.iotsitewise.computation_models
WHERE computation_model_id = '{{ computation_model_id }}' --required
AND region = '{{ region }}' --required
AND clientToken = '{{ clientToken }}'
;
```
</TabItem>
</Tabs>
