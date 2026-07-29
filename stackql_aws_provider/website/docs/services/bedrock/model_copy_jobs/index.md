--- 
title: model_copy_jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - model_copy_jobs
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

Creates, updates, deletes, gets or lists a <code>model_copy_jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="model_copy_jobs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bedrock.model_copy_jobs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_model_copy_job"
    values={[
        { label: 'get_model_copy_job', value: 'get_model_copy_job' },
        { label: 'list_model_copy_jobs', value: 'list_model_copy_jobs' }
    ]}
>
<TabItem value="get_model_copy_job">

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
    <td>The time at which the model copy job was created.</td>
</tr>
<tr>
    <td><CopyableCode code="failure_message" /></td>
    <td><code>string</code></td>
    <td>An error message for why the model copy job failed.</td>
</tr>
<tr>
    <td><CopyableCode code="job_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the model copy job. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:bedrock:&#91;a-z0-9-&#93;&#123;1,20&#125;:&#91;0-9&#93;&#123;12&#125;:model-copy-job/&#91;a-z0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="source_account_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the account that the model being copied originated from. (pattern: &lt;code&gt;&#91;0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="source_model_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the original model being copied. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:bedrock:&#91;a-z0-9-&#93;&#123;1,20&#125;:((&#91;0-9&#93;&#123;12&#125;:custom-model/((imported)|(&#91;a-z0-9-&#93;&#123;1,63&#125;&#91;.&#93;&#123;1&#125;&#91;a-z0-9-&#93;&#123;1,63&#125;))((&#91;:&#93;&#91;a-z0-9-&#93;&#123;1,63&#125;)&#123;0,2&#125;)?/&#91;a-z0-9&#93;&#123;12&#125;)|(:foundation-model/&#91;a-z0-9-&#93;&#123;1,63&#125;&#91;.&#93;&#123;1&#125;(&#91;a-z0-9-&#93;&#123;1,63&#125;&#91;.&#93;)&#123;0,2&#125;&#91;a-z0-9-&#93;&#123;1,63&#125;(&#91;:&#93;&#91;a-z0-9-&#93;&#123;1,63&#125;)&#123;0,2&#125;))&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="source_model_name" /></td>
    <td><code>string</code></td>
    <td>The name of the original model being copied. (pattern: &lt;code&gt;(&#91;0-9a-zA-Z&#93;&#91;_-&#93;?)&#123;1,63&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the model copy job. (InProgress, Completed, Failed)</td>
</tr>
<tr>
    <td><CopyableCode code="target_model_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the copied model. (pattern: &lt;code&gt;arn:aws(|-us-gov|-cn|-iso|-iso-b):bedrock:&#91;a-z0-9-&#93;&#123;1,20&#125;:&#91;0-9&#93;&#123;12&#125;:custom-model/(imported|&#91;a-z0-9-&#93;&#123;1,63&#125;&#91;.&#93;&#123;1&#125;&#91;a-z0-9-&#93;&#123;1,63&#125;(&#91;a-z0-9-&#93;&#123;1,63&#125;&#91;.&#93;)&#123;0,2&#125;&#91;a-z0-9-&#93;&#123;1,63&#125;(&#91;:&#93;&#91;a-z0-9-&#93;&#123;1,63&#125;)&#123;0,2&#125;)/&#91;a-z0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="target_model_kms_key_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the KMS key encrypting the copied model. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:kms:&#91;a-zA-Z0-9-&#93;*:&#91;0-9&#93;&#123;12&#125;:key/&#91;a-zA-Z0-9-&#93;&#123;36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="target_model_name" /></td>
    <td><code>string</code></td>
    <td>The name of the copied model. (pattern: &lt;code&gt;(&#91;0-9a-zA-Z&#93;&#91;_-&#93;?)&#123;1,63&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="target_model_tags" /></td>
    <td><code>array</code></td>
    <td>The tags associated with the copied model.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_model_copy_jobs">

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
    <td>The time that the model copy job was created.</td>
</tr>
<tr>
    <td><CopyableCode code="failure_message" /></td>
    <td><code>string</code></td>
    <td>If a model fails to be copied, a message describing why the job failed is included here.</td>
</tr>
<tr>
    <td><CopyableCode code="job_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resoource Name (ARN) of the model copy job. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:bedrock:&#91;a-z0-9-&#93;&#123;1,20&#125;:&#91;0-9&#93;&#123;12&#125;:model-copy-job/&#91;a-z0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="source_account_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the account that the model being copied originated from. (pattern: &lt;code&gt;&#91;0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="source_model_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the original model being copied. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:bedrock:&#91;a-z0-9-&#93;&#123;1,20&#125;:((&#91;0-9&#93;&#123;12&#125;:custom-model/((imported)|(&#91;a-z0-9-&#93;&#123;1,63&#125;&#91;.&#93;&#123;1&#125;&#91;a-z0-9-&#93;&#123;1,63&#125;))((&#91;:&#93;&#91;a-z0-9-&#93;&#123;1,63&#125;)&#123;0,2&#125;)?/&#91;a-z0-9&#93;&#123;12&#125;)|(:foundation-model/&#91;a-z0-9-&#93;&#123;1,63&#125;&#91;.&#93;&#123;1&#125;(&#91;a-z0-9-&#93;&#123;1,63&#125;&#91;.&#93;)&#123;0,2&#125;&#91;a-z0-9-&#93;&#123;1,63&#125;(&#91;:&#93;&#91;a-z0-9-&#93;&#123;1,63&#125;)&#123;0,2&#125;))&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="source_model_name" /></td>
    <td><code>string</code></td>
    <td>The name of the original model being copied. (pattern: &lt;code&gt;(&#91;0-9a-zA-Z&#93;&#91;_-&#93;?)&#123;1,63&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the model copy job. (InProgress, Completed, Failed)</td>
</tr>
<tr>
    <td><CopyableCode code="target_model_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the copied model. (pattern: &lt;code&gt;arn:aws(|-us-gov|-cn|-iso|-iso-b):bedrock:&#91;a-z0-9-&#93;&#123;1,20&#125;:&#91;0-9&#93;&#123;12&#125;:custom-model/(imported|&#91;a-z0-9-&#93;&#123;1,63&#125;&#91;.&#93;&#123;1&#125;&#91;a-z0-9-&#93;&#123;1,63&#125;(&#91;a-z0-9-&#93;&#123;1,63&#125;&#91;.&#93;)&#123;0,2&#125;&#91;a-z0-9-&#93;&#123;1,63&#125;(&#91;:&#93;&#91;a-z0-9-&#93;&#123;1,63&#125;)&#123;0,2&#125;)/&#91;a-z0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="target_model_kms_key_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the KMS key used to encrypt the copied model. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:kms:&#91;a-zA-Z0-9-&#93;*:&#91;0-9&#93;&#123;12&#125;:key/&#91;a-zA-Z0-9-&#93;&#123;36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="target_model_name" /></td>
    <td><code>string</code></td>
    <td>The name of the copied model. (pattern: &lt;code&gt;(&#91;0-9a-zA-Z&#93;&#91;_-&#93;?)&#123;1,63&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="target_model_tags" /></td>
    <td><code>array</code></td>
    <td>Tags associated with the copied model.</td>
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
    <td><a href="#get_model_copy_job"><CopyableCode code="get_model_copy_job" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-job_arn"><code>job_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about a model copy job. For more information, see Copy models to be used in other regions in the Amazon Bedrock User Guide.</td>
</tr>
<tr>
    <td><a href="#list_model_copy_jobs"><CopyableCode code="list_model_copy_jobs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-creationTimeAfter"><code>creationTimeAfter</code></a>, <a href="#parameter-creationTimeBefore"><code>creationTimeBefore</code></a>, <a href="#parameter-statusEquals"><code>statusEquals</code></a>, <a href="#parameter-sourceAccountEquals"><code>sourceAccountEquals</code></a>, <a href="#parameter-sourceModelArnEquals"><code>sourceModelArnEquals</code></a>, <a href="#parameter-outputModelNameContains"><code>outputModelNameContains</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-sortBy"><code>sortBy</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a></td>
    <td>Returns a list of model copy jobs that you have submitted. You can filter the jobs to return based on one or more criteria. For more information, see Copy models to be used in other regions in the Amazon Bedrock User Guide.</td>
</tr>
<tr>
    <td><a href="#create_model_copy_job"><CopyableCode code="create_model_copy_job" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-sourceModelArn"><code>sourceModelArn</code></a>, <a href="#parameter-targetModelName"><code>targetModelName</code></a></td>
    <td></td>
    <td>Copies a model to another region so that it can be used there. For more information, see Copy models to be used in other regions in the Amazon Bedrock User Guide.</td>
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
<tr id="parameter-job_arn">
    <td><CopyableCode code="job_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the model copy job.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-creationTimeAfter">
    <td><CopyableCode code="creationTimeAfter" /></td>
    <td><code>string (date-time)</code></td>
    <td>Filters for model copy jobs created after the specified time.</td>
</tr>
<tr id="parameter-creationTimeBefore">
    <td><CopyableCode code="creationTimeBefore" /></td>
    <td><code>string (date-time)</code></td>
    <td>Filters for model copy jobs created before the specified time.</td>
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
<tr id="parameter-outputModelNameContains">
    <td><CopyableCode code="outputModelNameContains" /></td>
    <td><code>string</code></td>
    <td>Filters for model copy jobs in which the name of the copied model contains the string that you specify.</td>
</tr>
<tr id="parameter-sortBy">
    <td><CopyableCode code="sortBy" /></td>
    <td><code>string</code></td>
    <td>The field to sort by in the returned list of model copy jobs.</td>
</tr>
<tr id="parameter-sortOrder">
    <td><CopyableCode code="sortOrder" /></td>
    <td><code>string</code></td>
    <td>Specifies whether to sort the results in ascending or descending order.</td>
</tr>
<tr id="parameter-sourceAccountEquals">
    <td><CopyableCode code="sourceAccountEquals" /></td>
    <td><code>string</code></td>
    <td>Filters for model copy jobs in which the account that the source model belongs to is equal to the value that you specify.</td>
</tr>
<tr id="parameter-sourceModelArnEquals">
    <td><CopyableCode code="sourceModelArnEquals" /></td>
    <td><code>string</code></td>
    <td>Filters for model copy jobs in which the Amazon Resource Name (ARN) of the source model to is equal to the value that you specify.</td>
</tr>
<tr id="parameter-statusEquals">
    <td><CopyableCode code="statusEquals" /></td>
    <td><code>string</code></td>
    <td>Filters for model copy jobs whose status matches the value that you specify.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_model_copy_job"
    values={[
        { label: 'get_model_copy_job', value: 'get_model_copy_job' },
        { label: 'list_model_copy_jobs', value: 'list_model_copy_jobs' }
    ]}
>
<TabItem value="get_model_copy_job">

Retrieves information about a model copy job. For more information, see Copy models to be used in other regions in the Amazon Bedrock User Guide.

```sql
SELECT
creation_time,
failure_message,
job_arn,
source_account_id,
source_model_arn,
source_model_name,
status,
target_model_arn,
target_model_kms_key_arn,
target_model_name,
target_model_tags
FROM aws.bedrock.model_copy_jobs
WHERE job_arn = '{{ job_arn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_model_copy_jobs">

Returns a list of model copy jobs that you have submitted. You can filter the jobs to return based on one or more criteria. For more information, see Copy models to be used in other regions in the Amazon Bedrock User Guide.

```sql
SELECT
creation_time,
failure_message,
job_arn,
source_account_id,
source_model_arn,
source_model_name,
status,
target_model_arn,
target_model_kms_key_arn,
target_model_name,
target_model_tags
FROM aws.bedrock.model_copy_jobs
WHERE region = '{{ region }}' -- required
AND creationTimeAfter = '{{ creationTimeAfter }}'
AND creationTimeBefore = '{{ creationTimeBefore }}'
AND statusEquals = '{{ statusEquals }}'
AND sourceAccountEquals = '{{ sourceAccountEquals }}'
AND sourceModelArnEquals = '{{ sourceModelArnEquals }}'
AND outputModelNameContains = '{{ outputModelNameContains }}'
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
AND sortBy = '{{ sortBy }}'
AND sortOrder = '{{ sortOrder }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_model_copy_job"
    values={[
        { label: 'create_model_copy_job', value: 'create_model_copy_job' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_model_copy_job">

Copies a model to another region so that it can be used there. For more information, see Copy models to be used in other regions in the Amazon Bedrock User Guide.

```sql
INSERT INTO aws.bedrock.model_copy_jobs (
sourceModelArn,
targetModelName,
modelKmsKeyId,
targetModelTags,
clientRequestToken,
region
)
SELECT 
'{{ sourceModelArn }}' /* required */,
'{{ targetModelName }}' /* required */,
'{{ modelKmsKeyId }}',
'{{ targetModelTags }}',
'{{ clientRequestToken }}',
'{{ region }}'
RETURNING
job_arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: model_copy_jobs
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the model_copy_jobs resource.
    - name: sourceModelArn
      value: "{{ sourceModelArn }}"
    - name: targetModelName
      value: "{{ targetModelName }}"
    - name: modelKmsKeyId
      value: "{{ modelKmsKeyId }}"
    - name: targetModelTags
      value:
        - key: "{{ key }}"
          value: "{{ value }}"
    - name: clientRequestToken
      value: "{{ clientRequestToken }}"
`}</CodeBlock>

</TabItem>
</Tabs>
