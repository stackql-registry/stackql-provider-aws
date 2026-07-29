--- 
title: foundation_models
hide_title: false
hide_table_of_contents: false
keywords:
  - foundation_models
  - bedrock
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

Creates, updates, deletes, gets or lists a <code>foundation_models</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="foundation_models" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bedrock.foundation_models" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_foundation_model"
    values={[
        { label: 'get_foundation_model', value: 'get_foundation_model' },
        { label: 'list_foundation_models', value: 'list_foundation_models' }
    ]}
>
<TabItem value="get_foundation_model">

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
    <td><CopyableCode code="customizations_supported" /></td>
    <td><code>array</code></td>
    <td>The customization that the model supports.</td>
</tr>
<tr>
    <td><CopyableCode code="inference_types_supported" /></td>
    <td><code>array</code></td>
    <td>The inference types that the model supports.</td>
</tr>
<tr>
    <td><CopyableCode code="input_modalities" /></td>
    <td><code>array</code></td>
    <td>The input modalities that the model supports.</td>
</tr>
<tr>
    <td><CopyableCode code="model_arn" /></td>
    <td><code>string</code></td>
    <td>The model Amazon Resource Name (ARN). (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:bedrock:&#91;a-z0-9-&#93;&#123;1,20&#125;::foundation-model/&#91;a-z0-9-&#93;&#123;1,63&#125;&#91;.&#93;&#123;1&#125;(&#91;a-z0-9-&#93;&#123;1,63&#125;&#91;.&#93;)&#123;0,2&#125;&#91;a-z0-9-&#93;&#123;1,63&#125;(&#91;:&#93;&#91;a-z0-9-&#93;&#123;1,63&#125;)&#123;0,2&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="model_id" /></td>
    <td><code>string</code></td>
    <td>The model identifier. (pattern: &lt;code&gt;&#91;a-z0-9-&#93;&#123;1,63&#125;&#91;.&#93;&#123;1&#125;&#91;a-z0-9-&#93;&#123;1,63&#125;(&#91;a-z0-9-&#93;&#123;1,63&#125;&#91;.&#93;)&#123;0,2&#125;&#91;a-z0-9-&#93;&#123;1,63&#125;(&#91;:&#93;&#91;a-z0-9-&#93;&#123;1,63&#125;)&#123;0,2&#125;(/&#91;a-z0-9&#93;&#123;12&#125;|)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="model_lifecycle" /></td>
    <td><code>object</code></td>
    <td>Contains details about whether a model version is available or deprecated</td>
</tr>
<tr>
    <td><CopyableCode code="model_name" /></td>
    <td><code>string</code></td>
    <td>The model name. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="output_modalities" /></td>
    <td><code>array</code></td>
    <td>The output modalities that the model supports.</td>
</tr>
<tr>
    <td><CopyableCode code="provider_name" /></td>
    <td><code>string</code></td>
    <td>The model's provider name. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="response_streaming_supported" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the model supports streaming.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_foundation_models">

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
    <td><CopyableCode code="model_summaries" /></td>
    <td><code>array</code></td>
    <td>A list of Amazon Bedrock foundation models.</td>
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
    <td><a href="#get_foundation_model"><CopyableCode code="get_foundation_model" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-model_identifier"><code>model_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get details about a Amazon Bedrock foundation model.</td>
</tr>
<tr>
    <td><a href="#list_foundation_models"><CopyableCode code="list_foundation_models" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-byProvider"><code>byProvider</code></a>, <a href="#parameter-byCustomizationType"><code>byCustomizationType</code></a>, <a href="#parameter-byOutputModality"><code>byOutputModality</code></a>, <a href="#parameter-byInferenceType"><code>byInferenceType</code></a></td>
    <td>Lists Amazon Bedrock foundation models that you can use. You can filter the results with the request parameters. For more information, see Foundation models in the Amazon Bedrock User Guide.</td>
</tr>
<tr>
    <td><a href="#create_foundation_model_agreement"><CopyableCode code="create_foundation_model_agreement" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-offerToken"><code>offerToken</code></a>, <a href="#parameter-modelId"><code>modelId</code></a></td>
    <td></td>
    <td>Request a model access agreement for the specified model.</td>
</tr>
<tr>
    <td><a href="#delete_foundation_model_agreement"><CopyableCode code="delete_foundation_model_agreement" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Delete the model access agreement for the specified model.</td>
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
<tr id="parameter-model_identifier">
    <td><CopyableCode code="model_identifier" /></td>
    <td><code>string</code></td>
    <td>The model identifier.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-byCustomizationType">
    <td><CopyableCode code="byCustomizationType" /></td>
    <td><code>string</code></td>
    <td>Return models that support the customization type that you specify. For more information, see Custom models in the Amazon Bedrock User Guide.</td>
</tr>
<tr id="parameter-byInferenceType">
    <td><CopyableCode code="byInferenceType" /></td>
    <td><code>string</code></td>
    <td>Return models that support the inference type that you specify. For more information, see Provisioned Throughput in the Amazon Bedrock User Guide.</td>
</tr>
<tr id="parameter-byOutputModality">
    <td><CopyableCode code="byOutputModality" /></td>
    <td><code>string</code></td>
    <td>Return models that support the output modality that you specify.</td>
</tr>
<tr id="parameter-byProvider">
    <td><CopyableCode code="byProvider" /></td>
    <td><code>string</code></td>
    <td>Return models belonging to the model provider that you specify.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_foundation_model"
    values={[
        { label: 'get_foundation_model', value: 'get_foundation_model' },
        { label: 'list_foundation_models', value: 'list_foundation_models' }
    ]}
>
<TabItem value="get_foundation_model">

Get details about a Amazon Bedrock foundation model.

```sql
SELECT
customizations_supported,
inference_types_supported,
input_modalities,
model_arn,
model_id,
model_lifecycle,
model_name,
output_modalities,
provider_name,
response_streaming_supported
FROM aws.bedrock.foundation_models
WHERE model_identifier = '{{ model_identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_foundation_models">

Lists Amazon Bedrock foundation models that you can use. You can filter the results with the request parameters. For more information, see Foundation models in the Amazon Bedrock User Guide.

```sql
SELECT
model_summaries
FROM aws.bedrock.foundation_models
WHERE region = '{{ region }}' -- required
AND byProvider = '{{ byProvider }}'
AND byCustomizationType = '{{ byCustomizationType }}'
AND byOutputModality = '{{ byOutputModality }}'
AND byInferenceType = '{{ byInferenceType }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_foundation_model_agreement"
    values={[
        { label: 'create_foundation_model_agreement', value: 'create_foundation_model_agreement' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_foundation_model_agreement">

Request a model access agreement for the specified model.

```sql
INSERT INTO aws.bedrock.foundation_models (
offerToken,
modelId,
region
)
SELECT 
'{{ offerToken }}' /* required */,
'{{ modelId }}' /* required */,
'{{ region }}'
RETURNING
model_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: foundation_models
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the foundation_models resource.
    - name: offerToken
      value: "{{ offerToken }}"
    - name: modelId
      value: "{{ modelId }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_foundation_model_agreement"
    values={[
        { label: 'delete_foundation_model_agreement', value: 'delete_foundation_model_agreement' }
    ]}
>
<TabItem value="delete_foundation_model_agreement">

Delete the model access agreement for the specified model.

```sql
DELETE FROM aws.bedrock.foundation_models
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
