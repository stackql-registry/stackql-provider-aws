--- 
title: trained_model_inference_jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - trained_model_inference_jobs
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

Creates, updates, deletes, gets or lists a <code>trained_model_inference_jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="trained_model_inference_jobs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cleanroomsml.trained_model_inference_jobs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_trained_model_inference_job"
    values={[
        { label: 'get_trained_model_inference_job', value: 'get_trained_model_inference_job' },
        { label: 'list_trained_model_inference_jobs', value: 'list_trained_model_inference_jobs' }
    ]}
>
<TabItem value="get_trained_model_inference_job">

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
    <td><CopyableCode code="configuredModelAlgorithmAssociationArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the configured model algorithm association that was used for the trained model inference job. (pattern: &lt;code&gt;arn:aws&#91;-a-z&#93;*:cleanrooms-ml:&#91;-a-z0-9&#93;+:&#91;0-9&#93;&#123;12&#125;:membership/&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;/configured-model-algorithm-association/&#91;-a-zA-Z0-9_/.&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="containerExecutionParameters" /></td>
    <td><code>object</code></td>
    <td>The execution parameters for the model inference job container.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the trained model inference job was created.</td>
</tr>
<tr>
    <td><CopyableCode code="dataSource" /></td>
    <td><code>object</code></td>
    <td>The data source that was used for the trained model inference job.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the trained model inference job. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDBFF-\uDC00\uDFFF\t\r\n&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="environment" /></td>
    <td><code>object</code></td>
    <td>The environment variables to set in the Docker container.</td>
</tr>
<tr>
    <td><CopyableCode code="inferenceContainerImageDigest" /></td>
    <td><code>string</code></td>
    <td>Information about the training container image.</td>
</tr>
<tr>
    <td><CopyableCode code="kmsKeyArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the KMS key. This key is used to encrypt and decrypt customer-owned data in the ML inference job and associated data. (pattern: &lt;code&gt;arn:aws&#91;-a-z&#93;*:kms:&#91;-a-z0-9&#93;+:&#91;0-9&#93;&#123;12&#125;:key/.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="logsStatus" /></td>
    <td><code>string</code></td>
    <td>The logs status for the trained model inference job. (PUBLISH_SUCCEEDED, PUBLISH_FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="logsStatusDetails" /></td>
    <td><code>string</code></td>
    <td>Details about the logs status for the trained model inference job.</td>
</tr>
<tr>
    <td><CopyableCode code="membershipIdentifier" /></td>
    <td><code>string</code></td>
    <td>The membership ID of the membership that contains the trained model inference job. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="metricsStatus" /></td>
    <td><code>string</code></td>
    <td>The metrics status for the trained model inference job. (PUBLISH_SUCCEEDED, PUBLISH_FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="metricsStatusDetails" /></td>
    <td><code>string</code></td>
    <td>Details about the metrics status for the trained model inference job.</td>
</tr>
<tr>
    <td><CopyableCode code="outputConfiguration" /></td>
    <td><code>object</code></td>
    <td>The output configuration information for the trained model inference job.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceConfig" /></td>
    <td><code>object</code></td>
    <td>The resource configuration information for the trained model inference job.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the trained model inference job. (CREATE_PENDING, CREATE_IN_PROGRESS, CREATE_FAILED, ACTIVE, CANCEL_PENDING, CANCEL_IN_PROGRESS, CANCEL_FAILED, INACTIVE)</td>
</tr>
<tr>
    <td><CopyableCode code="statusDetails" /></td>
    <td><code>object</code></td>
    <td>Details about the status of a resource.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The optional metadata that you applied to the resource to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define. The following basic restrictions apply to tags: Maximum number of tags per resource - 50. For each resource, each tag key must be unique, and each tag key can have only one value. Maximum key length - 128 Unicode characters in UTF-8. Maximum value length - 256 Unicode characters in UTF-8. If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @. Tag keys and values are case sensitive. Do not use aws:, AWS:, or any upper or lowercase combination of such as a prefix for keys as it is reserved for AWS use. You cannot edit or delete tag keys with this prefix. Values can have this prefix. If a tag value has aws as its prefix but the key does not, then Clean Rooms ML considers it to be a user tag and will count against the limit of 50 tags. Tags with only the key prefix of aws do not count against your tags per resource limit.</td>
</tr>
<tr>
    <td><CopyableCode code="trainedModelArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the trained model that was used for the trained model inference job. (pattern: &lt;code&gt;arn:aws&#91;-a-z&#93;*:cleanrooms-ml:&#91;-a-z0-9&#93;+:&#91;0-9&#93;&#123;12&#125;:membership/&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;/trained-model/&#91;-a-zA-Z0-9_/.&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="trainedModelInferenceJobArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the trained model inference job. (pattern: &lt;code&gt;arn:aws&#91;-a-z&#93;*:cleanrooms-ml:&#91;-a-z0-9&#93;+:&#91;0-9&#93;&#123;12&#125;:membership/&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;/trained-model-inference-job/&#91;-a-zA-Z0-9_/.&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="trainedModelVersionIdentifier" /></td>
    <td><code>string</code></td>
    <td>The version identifier of the trained model used for this inference job. This identifies the specific version of the trained model that was used to generate the inference results. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The most recent time at which the trained model inference job was updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_trained_model_inference_jobs">

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
    <td><CopyableCode code="collaborationIdentifier" /></td>
    <td><code>string</code></td>
    <td>The collaboration ID of the collaboration that contains the trained model inference job. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="configuredModelAlgorithmAssociationArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the configured model algorithm association that is used for the trained model inference job. (pattern: &lt;code&gt;arn:aws&#91;-a-z&#93;*:cleanrooms-ml:&#91;-a-z0-9&#93;+:&#91;0-9&#93;&#123;12&#125;:membership/&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;/configured-model-algorithm-association/&#91;-a-zA-Z0-9_/.&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the trained model inference job was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the trained model inference job. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDBFF-\uDC00\uDFFF\t\r\n&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="logsStatus" /></td>
    <td><code>string</code></td>
    <td>The log status of the trained model inference job. (PUBLISH_SUCCEEDED, PUBLISH_FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="logsStatusDetails" /></td>
    <td><code>string</code></td>
    <td>Details about the log status for the trained model inference job.</td>
</tr>
<tr>
    <td><CopyableCode code="membershipIdentifier" /></td>
    <td><code>string</code></td>
    <td>The membership ID of the membership that contains the trained model inference job. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="metricsStatus" /></td>
    <td><code>string</code></td>
    <td>The metric status of the trained model inference job. (PUBLISH_SUCCEEDED, PUBLISH_FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="metricsStatusDetails" /></td>
    <td><code>string</code></td>
    <td>Details about the metrics status for the trained model inference job.</td>
</tr>
<tr>
    <td><CopyableCode code="outputConfiguration" /></td>
    <td><code>object</code></td>
    <td>The output configuration information of the trained model job.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the trained model inference job. (CREATE_PENDING, CREATE_IN_PROGRESS, CREATE_FAILED, ACTIVE, CANCEL_PENDING, CANCEL_IN_PROGRESS, CANCEL_FAILED, INACTIVE)</td>
</tr>
<tr>
    <td><CopyableCode code="trainedModelArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the trained model that is used for the trained model inference job. (pattern: &lt;code&gt;arn:aws&#91;-a-z&#93;*:cleanrooms-ml:&#91;-a-z0-9&#93;+:&#91;0-9&#93;&#123;12&#125;:membership/&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;/trained-model/&#91;-a-zA-Z0-9_/.&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="trainedModelInferenceJobArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the trained model inference job. (pattern: &lt;code&gt;arn:aws&#91;-a-z&#93;*:cleanrooms-ml:&#91;-a-z0-9&#93;+:&#91;0-9&#93;&#123;12&#125;:membership/&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;/trained-model-inference-job/&#91;-a-zA-Z0-9_/.&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="trainedModelVersionIdentifier" /></td>
    <td><code>string</code></td>
    <td>The version identifier of the trained model that was used for inference in this job. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
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
    <td><a href="#get_trained_model_inference_job"><CopyableCode code="get_trained_model_inference_job" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-membership_identifier"><code>membership_identifier</code></a>, <a href="#parameter-trained_model_inference_job_arn"><code>trained_model_inference_job_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about a trained model inference job.</td>
</tr>
<tr>
    <td><a href="#list_trained_model_inference_jobs"><CopyableCode code="list_trained_model_inference_jobs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-membership_identifier"><code>membership_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-trainedModelArn"><code>trainedModelArn</code></a>, <a href="#parameter-trainedModelVersionIdentifier"><code>trainedModelVersionIdentifier</code></a></td>
    <td>Returns a list of trained model inference jobs that match the request parameters.</td>
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
<tr id="parameter-membership_identifier">
    <td><CopyableCode code="membership_identifier" /></td>
    <td><code>string</code></td>
    <td>The membership</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-trained_model_inference_job_arn">
    <td><CopyableCode code="trained_model_inference_job_arn" /></td>
    <td><code>string</code></td>
    <td>Provides the Amazon Resource Name (ARN) of the trained model inference job that you are interested in.</td>
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
    <td>The Amazon Resource Name (ARN) of a trained model that was used to create the trained model inference jobs that you are interested in.</td>
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
    defaultValue="get_trained_model_inference_job"
    values={[
        { label: 'get_trained_model_inference_job', value: 'get_trained_model_inference_job' },
        { label: 'list_trained_model_inference_jobs', value: 'list_trained_model_inference_jobs' }
    ]}
>
<TabItem value="get_trained_model_inference_job">

Returns information about a trained model inference job.

```sql
SELECT
name,
configuredModelAlgorithmAssociationArn,
containerExecutionParameters,
createTime,
dataSource,
description,
environment,
inferenceContainerImageDigest,
kmsKeyArn,
logsStatus,
logsStatusDetails,
membershipIdentifier,
metricsStatus,
metricsStatusDetails,
outputConfiguration,
resourceConfig,
status,
statusDetails,
tags,
trainedModelArn,
trainedModelInferenceJobArn,
trainedModelVersionIdentifier,
updateTime
FROM aws.cleanroomsml.trained_model_inference_jobs
WHERE membership_identifier = '{{ membership_identifier }}' -- required
AND trained_model_inference_job_arn = '{{ trained_model_inference_job_arn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_trained_model_inference_jobs">

Returns a list of trained model inference jobs that match the request parameters.

```sql
SELECT
name,
collaborationIdentifier,
configuredModelAlgorithmAssociationArn,
createTime,
description,
logsStatus,
logsStatusDetails,
membershipIdentifier,
metricsStatus,
metricsStatusDetails,
outputConfiguration,
status,
trainedModelArn,
trainedModelInferenceJobArn,
trainedModelVersionIdentifier,
updateTime
FROM aws.cleanroomsml.trained_model_inference_jobs
WHERE membership_identifier = '{{ membership_identifier }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
AND trainedModelArn = '{{ trainedModelArn }}'
AND trainedModelVersionIdentifier = '{{ trainedModelVersionIdentifier }}'
;
```
</TabItem>
</Tabs>
