--- 
title: document_classification_jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - document_classification_jobs
  - comprehend
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

Creates, updates, deletes, gets or lists a <code>document_classification_jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="document_classification_jobs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.comprehend.document_classification_jobs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_document_classification_job"
    values={[
        { label: 'describe_document_classification_job', value: 'describe_document_classification_job' },
        { label: 'list_document_classification_jobs', value: 'list_document_classification_jobs' }
    ]}
>
<TabItem value="describe_document_classification_job">

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
    <td>The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to your input data. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:iam::&#91;0-9&#93;&#123;12&#125;:role/.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="DocumentClassifierArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) that identifies the document classifier. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:comprehend:&#91;a-zA-Z0-9-&#93;*:&#91;0-9&#93;&#123;12&#125;:document-classifier/&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)*(/version/&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)*)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="EndTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the document classification job completed.</td>
</tr>
<tr>
    <td><CopyableCode code="FlywheelArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Number (ARN) of the flywheel (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:comprehend:&#91;a-zA-Z0-9-&#93;*:&#91;0-9&#93;&#123;12&#125;:flywheel/&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="InputDataConfig" /></td>
    <td><code>object</code></td>
    <td>The input data configuration that you supplied when you created the document classification job.</td>
</tr>
<tr>
    <td><CopyableCode code="JobArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the document classification job. It is a unique, fully qualified identifier for the job. It includes the Amazon Web Services account, Amazon Web Services Region, and the job ID. The format of the ARN is as follows: arn:<code>&lt;partition&gt;</code>:comprehend:<code>&lt;region&gt;</code>:<code>&lt;account-id&gt;</code>:document-classification-job/<code>&lt;job-id&gt;</code> The following is an example job ARN: arn:aws:comprehend:us-west-2:111122223333:document-classification-job/1234abcd12ab34cd56ef1234567890ab (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:comprehend:&#91;a-zA-Z0-9-&#93;*:&#91;0-9&#93;&#123;12&#125;:&#91;a-zA-Z0-9-&#93;&#123;1,64&#125;/&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)*((/dataset/&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)*)|(/version/&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)*))?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="JobId" /></td>
    <td><code>string</code></td>
    <td>The identifier assigned to the document classification job. (pattern: &lt;code&gt;^(&#91;\p&#123;L&#125;\p&#123;Z&#125;\p&#123;N&#125;_.:/=+\-%@&#93;*)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="JobName" /></td>
    <td><code>string</code></td>
    <td>The name that you assigned to the document classification job. (pattern: &lt;code&gt;^(&#91;\p&#123;L&#125;\p&#123;Z&#125;\p&#123;N&#125;_.:/=+\-%@&#93;*)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="JobStatus" /></td>
    <td><code>string</code></td>
    <td>The current status of the document classification job. If the status is FAILED, the Message field shows the reason for the failure. (SUBMITTED, IN_PROGRESS, COMPLETED, FAILED, STOP_REQUESTED, STOPPED)</td>
</tr>
<tr>
    <td><CopyableCode code="Message" /></td>
    <td><code>string</code></td>
    <td>A description of the status of the job.</td>
</tr>
<tr>
    <td><CopyableCode code="OutputDataConfig" /></td>
    <td><code>object</code></td>
    <td>The output data configuration that you supplied when you created the document classification job.</td>
</tr>
<tr>
    <td><CopyableCode code="SubmitTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the document classification job was submitted for processing.</td>
</tr>
<tr>
    <td><CopyableCode code="VolumeKmsKeyId" /></td>
    <td><code>string</code></td>
    <td>ID for the Amazon Web Services Key Management Service (KMS) key that Amazon Comprehend uses to encrypt data on the storage volume attached to the ML compute instance(s) that process the analysis job. The VolumeKmsKeyId can be either of the following formats: KMS Key ID: "1234abcd-12ab-34cd-56ef-1234567890ab" Amazon Resource Name (ARN) of a KMS Key: "arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab" (pattern: &lt;code&gt;^\p&#123;ASCII&#125;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="VpcConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration parameters for an optional private Virtual Private Cloud (VPC) containing the resources you are using for the job. For more information, see Amazon VPC.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_document_classification_jobs">

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
    <td>The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to your input data. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:iam::&#91;0-9&#93;&#123;12&#125;:role/.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="DocumentClassifierArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) that identifies the document classifier. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:comprehend:&#91;a-zA-Z0-9-&#93;*:&#91;0-9&#93;&#123;12&#125;:document-classifier/&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)*(/version/&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)*)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="EndTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the document classification job completed.</td>
</tr>
<tr>
    <td><CopyableCode code="FlywheelArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Number (ARN) of the flywheel (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:comprehend:&#91;a-zA-Z0-9-&#93;*:&#91;0-9&#93;&#123;12&#125;:flywheel/&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="InputDataConfig" /></td>
    <td><code>object</code></td>
    <td>The input data configuration that you supplied when you created the document classification job.</td>
</tr>
<tr>
    <td><CopyableCode code="JobArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the document classification job. It is a unique, fully qualified identifier for the job. It includes the Amazon Web Services account, Amazon Web Services Region, and the job ID. The format of the ARN is as follows: arn:<code>&lt;partition&gt;</code>:comprehend:<code>&lt;region&gt;</code>:<code>&lt;account-id&gt;</code>:document-classification-job/<code>&lt;job-id&gt;</code> The following is an example job ARN: arn:aws:comprehend:us-west-2:111122223333:document-classification-job/1234abcd12ab34cd56ef1234567890ab (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:comprehend:&#91;a-zA-Z0-9-&#93;*:&#91;0-9&#93;&#123;12&#125;:&#91;a-zA-Z0-9-&#93;&#123;1,64&#125;/&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)*((/dataset/&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)*)|(/version/&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)*))?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="JobId" /></td>
    <td><code>string</code></td>
    <td>The identifier assigned to the document classification job. (pattern: &lt;code&gt;^(&#91;\p&#123;L&#125;\p&#123;Z&#125;\p&#123;N&#125;_.:/=+\-%@&#93;*)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="JobName" /></td>
    <td><code>string</code></td>
    <td>The name that you assigned to the document classification job. (pattern: &lt;code&gt;^(&#91;\p&#123;L&#125;\p&#123;Z&#125;\p&#123;N&#125;_.:/=+\-%@&#93;*)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="JobStatus" /></td>
    <td><code>string</code></td>
    <td>The current status of the document classification job. If the status is FAILED, the Message field shows the reason for the failure. (SUBMITTED, IN_PROGRESS, COMPLETED, FAILED, STOP_REQUESTED, STOPPED)</td>
</tr>
<tr>
    <td><CopyableCode code="Message" /></td>
    <td><code>string</code></td>
    <td>A description of the status of the job.</td>
</tr>
<tr>
    <td><CopyableCode code="OutputDataConfig" /></td>
    <td><code>object</code></td>
    <td>The output data configuration that you supplied when you created the document classification job.</td>
</tr>
<tr>
    <td><CopyableCode code="SubmitTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the document classification job was submitted for processing.</td>
</tr>
<tr>
    <td><CopyableCode code="VolumeKmsKeyId" /></td>
    <td><code>string</code></td>
    <td>ID for the Amazon Web Services Key Management Service (KMS) key that Amazon Comprehend uses to encrypt data on the storage volume attached to the ML compute instance(s) that process the analysis job. The VolumeKmsKeyId can be either of the following formats: KMS Key ID: "1234abcd-12ab-34cd-56ef-1234567890ab" Amazon Resource Name (ARN) of a KMS Key: "arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab" (pattern: &lt;code&gt;^\p&#123;ASCII&#125;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="VpcConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration parameters for an optional private Virtual Private Cloud (VPC) containing the resources you are using for the job. For more information, see Amazon VPC.</td>
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
    <td><a href="#describe_document_classification_job"><CopyableCode code="describe_document_classification_job" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the properties associated with a document classification job. Use this operation to get the status of a classification job.</td>
</tr>
<tr>
    <td><a href="#list_document_classification_jobs"><CopyableCode code="list_document_classification_jobs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets a list of the documentation classification jobs that you have submitted.</td>
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
    defaultValue="describe_document_classification_job"
    values={[
        { label: 'describe_document_classification_job', value: 'describe_document_classification_job' },
        { label: 'list_document_classification_jobs', value: 'list_document_classification_jobs' }
    ]}
>
<TabItem value="describe_document_classification_job">

Gets the properties associated with a document classification job. Use this operation to get the status of a classification job.

```sql
SELECT
DataAccessRoleArn,
DocumentClassifierArn,
EndTime,
FlywheelArn,
InputDataConfig,
JobArn,
JobId,
JobName,
JobStatus,
Message,
OutputDataConfig,
SubmitTime,
VolumeKmsKeyId,
VpcConfig
FROM aws.comprehend.document_classification_jobs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_document_classification_jobs">

Gets a list of the documentation classification jobs that you have submitted.

```sql
SELECT
DataAccessRoleArn,
DocumentClassifierArn,
EndTime,
FlywheelArn,
InputDataConfig,
JobArn,
JobId,
JobName,
JobStatus,
Message,
OutputDataConfig,
SubmitTime,
VolumeKmsKeyId,
VpcConfig
FROM aws.comprehend.document_classification_jobs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
