--- 
title: inference_profiles
hide_title: false
hide_table_of_contents: false
keywords:
  - inference_profiles
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

Creates, updates, deletes, gets or lists an <code>inference_profiles</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="inference_profiles" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bedrock.inference_profiles" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_inference_profile"
    values={[
        { label: 'get_inference_profile', value: 'get_inference_profile' },
        { label: 'list_inference_profiles', value: 'list_inference_profiles' }
    ]}
>
<TabItem value="get_inference_profile">

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
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the inference profile was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the inference profile. (pattern: &lt;code&gt;(&#91;0-9a-zA-Z:.&#93;&#91; _-&#93;?)+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="inferenceProfileArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the inference profile. (pattern: &lt;code&gt;arn:aws(|-us-gov|-cn|-iso|-iso-b):bedrock:(|&#91;0-9a-z-&#93;&#123;0,20&#125;):(|&#91;0-9&#93;&#123;12&#125;):(inference-profile|application-inference-profile)/&#91;a-zA-Z0-9-:.&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="inferenceProfileId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the inference profile. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-:.&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="inferenceProfileName" /></td>
    <td><code>string</code></td>
    <td>The name of the inference profile. (pattern: &lt;code&gt;(&#91;0-9a-zA-Z&#93;&#91; _-&#93;?)+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="models" /></td>
    <td><code>array</code></td>
    <td>A list of information about each model in the inference profile.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the inference profile. ACTIVE means that the inference profile is ready to be used. (ACTIVE)</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>The type of the inference profile. The following types are possible: SYSTEM_DEFINED – The inference profile is defined by Amazon Bedrock. You can route inference requests across regions with these inference profiles. APPLICATION – The inference profile was created by a user. This type of inference profile can track metrics and costs when invoking the model in it. The inference profile may route requests to one or multiple regions. (SYSTEM_DEFINED, APPLICATION)</td>
</tr>
<tr>
    <td><CopyableCode code="updatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the inference profile was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_inference_profiles">

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
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the inference profile was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the inference profile. (pattern: &lt;code&gt;(&#91;0-9a-zA-Z:.&#93;&#91; _-&#93;?)+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="inferenceProfileArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the inference profile. (pattern: &lt;code&gt;arn:aws(|-us-gov|-cn|-iso|-iso-b):bedrock:(|&#91;0-9a-z-&#93;&#123;0,20&#125;):(|&#91;0-9&#93;&#123;12&#125;):(inference-profile|application-inference-profile)/&#91;a-zA-Z0-9-:.&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="inferenceProfileId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the inference profile. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-:.&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="inferenceProfileName" /></td>
    <td><code>string</code></td>
    <td>The name of the inference profile. (pattern: &lt;code&gt;(&#91;0-9a-zA-Z&#93;&#91; _-&#93;?)+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="models" /></td>
    <td><code>array</code></td>
    <td>A list of information about each model in the inference profile.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the inference profile. ACTIVE means that the inference profile is ready to be used. (ACTIVE)</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>The type of the inference profile. The following types are possible: SYSTEM_DEFINED – The inference profile is defined by Amazon Bedrock. You can route inference requests across regions with these inference profiles. APPLICATION – The inference profile was created by a user. This type of inference profile can track metrics and costs when invoking the model in it. The inference profile may route requests to one or multiple regions. (SYSTEM_DEFINED, APPLICATION)</td>
</tr>
<tr>
    <td><CopyableCode code="updatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the inference profile was last updated.</td>
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
    <td><a href="#get_inference_profile"><CopyableCode code="get_inference_profile" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-inference_profile_identifier"><code>inference_profile_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about an inference profile. For more information, see Increase throughput and resilience with cross-region inference in Amazon Bedrock. in the Amazon Bedrock User Guide.</td>
</tr>
<tr>
    <td><a href="#list_inference_profiles"><CopyableCode code="list_inference_profiles" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-type"><code>type</code></a></td>
    <td>Returns a list of inference profiles that you can use. For more information, see Increase throughput and resilience with cross-region inference in Amazon Bedrock. in the Amazon Bedrock User Guide.</td>
</tr>
<tr>
    <td><a href="#create_inference_profile"><CopyableCode code="create_inference_profile" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-inferenceProfileName"><code>inferenceProfileName</code></a>, <a href="#parameter-modelSource"><code>modelSource</code></a></td>
    <td></td>
    <td>Creates an application inference profile to track metrics and costs when invoking a model. To create an application inference profile for a foundation model in one region, specify the ARN of the model in that region. To create an application inference profile for a foundation model across multiple regions, specify the ARN of the system-defined inference profile that contains the regions that you want to route requests to. For more information, see Increase throughput and resilience with cross-region inference in Amazon Bedrock. in the Amazon Bedrock User Guide.</td>
</tr>
<tr>
    <td><a href="#delete_inference_profile"><CopyableCode code="delete_inference_profile" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-inference_profile_identifier"><code>inference_profile_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an application inference profile. For more information, see Increase throughput and resilience with cross-region inference in Amazon Bedrock. in the Amazon Bedrock User Guide.</td>
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
<tr id="parameter-inference_profile_identifier">
    <td><CopyableCode code="inference_profile_identifier" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) or ID of the application inference profile to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in the response. If the total number of results is greater than this value, use the token returned in the response in the nextToken field when making another request to return the next batch of results.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>If the total number of results is greater than the maxResults value provided in the request, enter the token returned in the nextToken field in the response in this field to return the next batch of results.</td>
</tr>
<tr id="parameter-type">
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Filters for inference profiles that match the type you specify. SYSTEM_DEFINED – The inference profile is defined by Amazon Bedrock. You can route inference requests across regions with these inference profiles. APPLICATION – The inference profile was created by a user. This type of inference profile can track metrics and costs when invoking the model in it. The inference profile may route requests to one or multiple regions.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_inference_profile"
    values={[
        { label: 'get_inference_profile', value: 'get_inference_profile' },
        { label: 'list_inference_profiles', value: 'list_inference_profiles' }
    ]}
>
<TabItem value="get_inference_profile">

Gets information about an inference profile. For more information, see Increase throughput and resilience with cross-region inference in Amazon Bedrock. in the Amazon Bedrock User Guide.

```sql
SELECT
createdAt,
description,
inferenceProfileArn,
inferenceProfileId,
inferenceProfileName,
models,
status,
type_,
updatedAt
FROM aws.bedrock.inference_profiles
WHERE inference_profile_identifier = '{{ inference_profile_identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_inference_profiles">

Returns a list of inference profiles that you can use. For more information, see Increase throughput and resilience with cross-region inference in Amazon Bedrock. in the Amazon Bedrock User Guide.

```sql
SELECT
createdAt,
description,
inferenceProfileArn,
inferenceProfileId,
inferenceProfileName,
models,
status,
type_,
updatedAt
FROM aws.bedrock.inference_profiles
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
AND type = '{{ type }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_inference_profile"
    values={[
        { label: 'create_inference_profile', value: 'create_inference_profile' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_inference_profile">

Creates an application inference profile to track metrics and costs when invoking a model. To create an application inference profile for a foundation model in one region, specify the ARN of the model in that region. To create an application inference profile for a foundation model across multiple regions, specify the ARN of the system-defined inference profile that contains the regions that you want to route requests to. For more information, see Increase throughput and resilience with cross-region inference in Amazon Bedrock. in the Amazon Bedrock User Guide.

```sql
INSERT INTO aws.bedrock.inference_profiles (
inferenceProfileName,
description,
clientRequestToken,
modelSource,
tags,
region
)
SELECT 
'{{ inferenceProfileName }}' /* required */,
'{{ description }}',
'{{ clientRequestToken }}',
'{{ modelSource }}' /* required */,
'{{ tags }}',
'{{ region }}'
RETURNING
inferenceProfileArn,
status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: inference_profiles
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the inference_profiles resource.
    - name: inferenceProfileName
      value: "{{ inferenceProfileName }}"
    - name: description
      value: "{{ description }}"
    - name: clientRequestToken
      value: "{{ clientRequestToken }}"
    - name: modelSource
      description: |
        Contains information about the model or system-defined inference profile that is the source for an inference profile..
      value:
        copyFrom: "{{ copyFrom }}"
    - name: tags
      value:
        - key: "{{ key }}"
          value: "{{ value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_inference_profile"
    values={[
        { label: 'delete_inference_profile', value: 'delete_inference_profile' }
    ]}
>
<TabItem value="delete_inference_profile">

Deletes an application inference profile. For more information, see Increase throughput and resilience with cross-region inference in Amazon Bedrock. in the Amazon Bedrock User Guide.

```sql
DELETE FROM aws.bedrock.inference_profiles
WHERE inference_profile_identifier = '{{ inference_profile_identifier }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
