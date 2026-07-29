--- 
title: collaboration_trained_model_inference_jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - collaboration_trained_model_inference_jobs
  - cleanroomsml
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

Creates, updates, deletes, gets or lists a <code>collaboration_trained_model_inference_jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="collaboration_trained_model_inference_jobs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cleanroomsml.collaboration_trained_model_inference_jobs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_collaboration_trained_model_inference_jobs"
    values={[
        { label: 'list_collaboration_trained_model_inference_jobs', value: 'list_collaboration_trained_model_inference_jobs' }
    ]}
>
<TabItem value="list_collaboration_trained_model_inference_jobs">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the trained model inference job. (pattern: &lt;code&gt;(?!\s*$)&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDBFF-\uDC00\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="collaboration_identifier" /></td>
    <td><code>string</code></td>
    <td>The collaboration ID of the collaboration that contains the trained model inference job. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="configured_model_algorithm_association_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the configured model algorithm association that is used for the trained model inference job. (pattern: &lt;code&gt;arn:aws&#91;-a-z&#93;*:cleanrooms-ml:&#91;-a-z0-9&#93;+:&#91;0-9&#93;&#123;12&#125;:membership/&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;/configured-model-algorithm-association/&#91;-a-zA-Z0-9_/.&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="create_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the trained model inference job was created.</td>
</tr>
<tr>
    <td><CopyableCode code="creator_account_id" /></td>
    <td><code>string</code></td>
    <td>The account ID that created the trained model inference job. (pattern: &lt;code&gt;&#91;0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the trained model inference job. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDBFF-\uDC00\uDFFF\t\r\n&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="logs_status" /></td>
    <td><code>string</code></td>
    <td>The trained model inference job logs status. (PUBLISH_SUCCEEDED, PUBLISH_FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="logs_status_details" /></td>
    <td><code>string</code></td>
    <td>Details about the logs status for the trained model inference job.</td>
</tr>
<tr>
    <td><CopyableCode code="membership_identifier" /></td>
    <td><code>string</code></td>
    <td>The membership ID of the membership that contains the trained model inference job. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="metrics_status" /></td>
    <td><code>string</code></td>
    <td>the trained model inference job metrics status. (PUBLISH_SUCCEEDED, PUBLISH_FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="metrics_status_details" /></td>
    <td><code>string</code></td>
    <td>Details about the metrics status for trained model inference job.</td>
</tr>
<tr>
    <td><CopyableCode code="output_configuration" /></td>
    <td><code>object</code></td>
    <td>Returns output configuration information for the trained model inference job.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the trained model inference job. (CREATE_PENDING, CREATE_IN_PROGRESS, CREATE_FAILED, ACTIVE, CANCEL_PENDING, CANCEL_IN_PROGRESS, CANCEL_FAILED, INACTIVE)</td>
</tr>
<tr>
    <td><CopyableCode code="trained_model_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the trained model that is used for the trained model inference job. (pattern: &lt;code&gt;arn:aws&#91;-a-z&#93;*:cleanrooms-ml:&#91;-a-z0-9&#93;+:&#91;0-9&#93;&#123;12&#125;:membership/&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;/trained-model/&#91;-a-zA-Z0-9_/.&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="trained_model_inference_job_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the trained model inference job. (pattern: &lt;code&gt;arn:aws&#91;-a-z&#93;*:cleanrooms-ml:&#91;-a-z0-9&#93;+:&#91;0-9&#93;&#123;12&#125;:membership/&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;/trained-model-inference-job/&#91;-a-zA-Z0-9_/.&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="trained_model_version_identifier" /></td>
    <td><code>string</code></td>
    <td>The version identifier of the trained model that was used for inference in this job. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="update_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The most recent time at which the trained model inference job was updated.</td>
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
    <td><a href="#list_collaboration_trained_model_inference_jobs"><CopyableCode code="list_collaboration_trained_model_inference_jobs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-collaboration_identifier"><code>collaboration_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-trainedModelArn"><code>trainedModelArn</code></a>, <a href="#parameter-trainedModelVersionIdentifier"><code>trainedModelVersionIdentifier</code></a></td>
    <td>Returns a list of trained model inference jobs in a specified collaboration.</td>
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
<tr id="parameter-collaboration_identifier">
    <td><CopyableCode code="collaboration_identifier" /></td>
    <td><code>string</code></td>
    <td>The collaboration ID of the collaboration that contains the trained model inference jobs that you are interested in.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum size of the results that is returned per call.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token value retrieved from a previous call to access the next page of results.</td>
</tr>
<tr id="parameter-trainedModelArn">
    <td><CopyableCode code="trainedModelArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the trained model that was used to create the trained model inference jobs that you are interested in.</td>
</tr>
<tr id="parameter-trainedModelVersionIdentifier">
    <td><CopyableCode code="trainedModelVersionIdentifier" /></td>
    <td><code>string</code></td>
    <td>The version identifier of the trained model to filter inference jobs by. When specified, only inference jobs that used this specific version of the trained model are returned.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_collaboration_trained_model_inference_jobs"
    values={[
        { label: 'list_collaboration_trained_model_inference_jobs', value: 'list_collaboration_trained_model_inference_jobs' }
    ]}
>
<TabItem value="list_collaboration_trained_model_inference_jobs">

Returns a list of trained model inference jobs in a specified collaboration.

```sql
SELECT
name,
collaboration_identifier,
configured_model_algorithm_association_arn,
create_time,
creator_account_id,
description,
logs_status,
logs_status_details,
membership_identifier,
metrics_status,
metrics_status_details,
output_configuration,
status,
trained_model_arn,
trained_model_inference_job_arn,
trained_model_version_identifier,
update_time
FROM aws.cleanroomsml.collaboration_trained_model_inference_jobs
WHERE collaboration_identifier = '{{ collaboration_identifier }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
AND trainedModelArn = '{{ trainedModelArn }}'
AND trainedModelVersionIdentifier = '{{ trainedModelVersionIdentifier }}'
;
```
</TabItem>
</Tabs>
