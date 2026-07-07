--- 
title: phi_detection_jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - phi_detection_jobs
  - comprehendmedical
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

Creates, updates, deletes, gets or lists a <code>phi_detection_jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="phi_detection_jobs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.comprehendmedical.phi_detection_jobs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_phi_detection_job"
    values={[
        { label: 'describe_phi_detection_job', value: 'describe_phi_detection_job' },
        { label: 'list_phi_detection_jobs', value: 'list_phi_detection_jobs' }
    ]}
>
<TabItem value="describe_phi_detection_job">

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
    <td><CopyableCode code="DataAccessRoleArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) that gives Amazon Comprehend Medical read access to your input data. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:iam::&#91;0-9&#93;&#123;12&#125;:role/.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="EndTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the detection job completed.</td>
</tr>
<tr>
    <td><CopyableCode code="ExpirationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that job metadata is deleted from the server. Output files in your S3 bucket will not be deleted. After the metadata is deleted, the job will no longer appear in the results of the ListEntitiesDetectionV2Job or the ListPHIDetectionJobs operation.</td>
</tr>
<tr>
    <td><CopyableCode code="InputDataConfig" /></td>
    <td><code>object</code></td>
    <td>The input data configuration that you supplied when you created the detection job.</td>
</tr>
<tr>
    <td><CopyableCode code="JobId" /></td>
    <td><code>string</code></td>
    <td>The identifier assigned to the detection job. (pattern: &lt;code&gt;^(&#91;\p&#123;L&#125;\p&#123;Z&#125;\p&#123;N&#125;_.:/=+\-%@&#93;*)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="JobName" /></td>
    <td><code>string</code></td>
    <td>The name that you assigned to the detection job. (pattern: &lt;code&gt;^(&#91;\p&#123;L&#125;\p&#123;Z&#125;\p&#123;N&#125;_.:/=+\-%@&#93;*)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="JobStatus" /></td>
    <td><code>string</code></td>
    <td>The current status of the detection job. If the status is FAILED, the Message field shows the reason for the failure. (SUBMITTED, IN_PROGRESS, COMPLETED, PARTIAL_SUCCESS, FAILED, STOP_REQUESTED, STOPPED)</td>
</tr>
<tr>
    <td><CopyableCode code="KMSKey" /></td>
    <td><code>string</code></td>
    <td>The AWS Key Management Service key, if any, used to encrypt the output files. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="LanguageCode" /></td>
    <td><code>string</code></td>
    <td>The language code of the input documents. (en)</td>
</tr>
<tr>
    <td><CopyableCode code="ManifestFilePath" /></td>
    <td><code>string</code></td>
    <td>The path to the file that describes the results of a batch job.</td>
</tr>
<tr>
    <td><CopyableCode code="Message" /></td>
    <td><code>string</code></td>
    <td>A description of the status of a job.</td>
</tr>
<tr>
    <td><CopyableCode code="ModelVersion" /></td>
    <td><code>string</code></td>
    <td>The version of the model used to analyze the documents. The version number looks like X.X.X. You can use this information to track the model used for a particular batch of documents.</td>
</tr>
<tr>
    <td><CopyableCode code="OutputDataConfig" /></td>
    <td><code>object</code></td>
    <td>The output data configuration that you supplied when you created the detection job.</td>
</tr>
<tr>
    <td><CopyableCode code="SubmitTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the detection job was submitted for processing.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_phi_detection_jobs">

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
    <td><CopyableCode code="ComprehendMedicalAsyncJobPropertiesList" /></td>
    <td><code>array</code></td>
    <td>A list containing the properties of each job returned.</td>
</tr>
<tr>
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>Identifies the next page of results to return.</td>
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
    <td><a href="#describe_phi_detection_job"><CopyableCode code="describe_phi_detection_job" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the properties associated with a protected health information (PHI) detection job. Use this operation to get the status of a detection job.</td>
</tr>
<tr>
    <td><a href="#list_phi_detection_jobs"><CopyableCode code="list_phi_detection_jobs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets a list of protected health information (PHI) detection jobs you have submitted.</td>
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
    defaultValue="describe_phi_detection_job"
    values={[
        { label: 'describe_phi_detection_job', value: 'describe_phi_detection_job' },
        { label: 'list_phi_detection_jobs', value: 'list_phi_detection_jobs' }
    ]}
>
<TabItem value="describe_phi_detection_job">

Gets the properties associated with a protected health information (PHI) detection job. Use this operation to get the status of a detection job.

```sql
SELECT
DataAccessRoleArn,
EndTime,
ExpirationTime,
InputDataConfig,
JobId,
JobName,
JobStatus,
KMSKey,
LanguageCode,
ManifestFilePath,
Message,
ModelVersion,
OutputDataConfig,
SubmitTime
FROM aws.comprehendmedical.phi_detection_jobs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_phi_detection_jobs">

Gets a list of protected health information (PHI) detection jobs you have submitted.

```sql
SELECT
ComprehendMedicalAsyncJobPropertiesList,
NextToken
FROM aws.comprehendmedical.phi_detection_jobs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
