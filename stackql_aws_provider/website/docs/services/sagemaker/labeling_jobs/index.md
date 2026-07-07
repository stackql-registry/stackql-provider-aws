--- 
title: labeling_jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - labeling_jobs
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

Creates, updates, deletes, gets or lists a <code>labeling_jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="labeling_jobs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sagemaker.labeling_jobs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_labeling_job"
    values={[
        { label: 'describe_labeling_job', value: 'describe_labeling_job' },
        { label: 'list_labeling_jobs', value: 'list_labeling_jobs' }
    ]}
>
<TabItem value="describe_labeling_job">

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
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the labeling job was created.</td>
</tr>
<tr>
    <td><CopyableCode code="FailureReason" /></td>
    <td><code>string</code></td>
    <td>If the job failed, the reason that it failed.</td>
</tr>
<tr>
    <td><CopyableCode code="HumanTaskConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration information required for human workers to complete a labeling task.</td>
</tr>
<tr>
    <td><CopyableCode code="InputConfig" /></td>
    <td><code>object</code></td>
    <td>Input configuration information for the labeling job, such as the Amazon S3 location of the data objects and the location of the manifest file that describes the data objects.</td>
</tr>
<tr>
    <td><CopyableCode code="JobReferenceCode" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for work done as part of a labeling job. (pattern: &lt;code&gt;.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="LabelAttributeName" /></td>
    <td><code>string</code></td>
    <td>The attribute used as the label in the output manifest file. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,126&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="LabelCategoryConfigS3Uri" /></td>
    <td><code>string</code></td>
    <td>The S3 location of the JSON file that defines the categories used to label data objects. Please note the following label-category limits: Semantic segmentation labeling jobs using automated labeling: 20 labels Box bounding labeling jobs (all): 10 labels The file is a JSON structure in the following format: &#123; "document-version": "2018-11-28" "labels": &#91; &#123; "label": "label 1" &#125;, &#123; "label": "label 2" &#125;, ... &#123; "label": "label n" &#125; &#93; &#125; (pattern: &lt;code&gt;(https|s3):​//(&#91;^/&#93;+)/?(.*)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="LabelCounters" /></td>
    <td><code>object</code></td>
    <td>Provides a breakdown of the number of data objects labeled by humans, the number of objects labeled by machine, the number of objects than couldn't be labeled, and the total number of objects labeled.</td>
</tr>
<tr>
    <td><CopyableCode code="LabelingJobAlgorithmsConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration information for automated data labeling.</td>
</tr>
<tr>
    <td><CopyableCode code="LabelingJobArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the labeling job. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z0-9\-&#93;*:&#91;0-9&#93;&#123;12&#125;:labeling-job/.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="LabelingJobName" /></td>
    <td><code>string</code></td>
    <td>The name assigned to the labeling job when it was created. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,62&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="LabelingJobOutput" /></td>
    <td><code>object</code></td>
    <td>The location of the output produced by the labeling job.</td>
</tr>
<tr>
    <td><CopyableCode code="LabelingJobStatus" /></td>
    <td><code>string</code></td>
    <td>The processing status of the labeling job. (Initializing, InProgress, Completed, Failed, Stopping, Stopped)</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the labeling job was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="OutputConfig" /></td>
    <td><code>object</code></td>
    <td>The location of the job's output data and the Amazon Web Services Key Management Service key ID for the key used to encrypt the output data, if any.</td>
</tr>
<tr>
    <td><CopyableCode code="RoleArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) that SageMaker assumes to perform tasks on your behalf during data labeling. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:iam::\d&#123;12&#125;:role/?&#91;a-zA-Z_0-9+=,.@\-_/&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="StoppingConditions" /></td>
    <td><code>object</code></td>
    <td>A set of conditions for stopping a labeling job. If any of the conditions are met, the job is automatically stopped.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>array</code></td>
    <td>An array of key-value pairs. You can use tags to categorize your Amazon Web Services resources in different ways, for example, by purpose, owner, or environment. For more information, see Tagging Amazon Web Services Resources.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_labeling_jobs">

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
    <td><CopyableCode code="AnnotationConsolidationLambdaArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Lambda function used to consolidate the annotations from individual workers into a label for a data object. For more information, see Annotation Consolidation. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:lambda:&#91;a-z0-9\-&#93;*:&#91;0-9&#93;&#123;12&#125;:function:.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the job was created (timestamp).</td>
</tr>
<tr>
    <td><CopyableCode code="FailureReason" /></td>
    <td><code>string</code></td>
    <td>If the LabelingJobStatus field is Failed, this field contains a description of the error.</td>
</tr>
<tr>
    <td><CopyableCode code="InputConfig" /></td>
    <td><code>object</code></td>
    <td>Input configuration for the labeling job.</td>
</tr>
<tr>
    <td><CopyableCode code="LabelCounters" /></td>
    <td><code>object</code></td>
    <td>Counts showing the progress of the labeling job.</td>
</tr>
<tr>
    <td><CopyableCode code="LabelingJobArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) assigned to the labeling job when it was created. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z0-9\-&#93;*:&#91;0-9&#93;&#123;12&#125;:labeling-job/.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="LabelingJobName" /></td>
    <td><code>string</code></td>
    <td>The name of the labeling job. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,62&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="LabelingJobOutput" /></td>
    <td><code>object</code></td>
    <td>The location of the output produced by the labeling job.</td>
</tr>
<tr>
    <td><CopyableCode code="LabelingJobStatus" /></td>
    <td><code>string</code></td>
    <td>The current status of the labeling job. (Initializing, InProgress, Completed, Failed, Stopping, Stopped)</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the job was last modified (timestamp).</td>
</tr>
<tr>
    <td><CopyableCode code="PreHumanTaskLambdaArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of a Lambda function. The function is run before each data object is sent to a worker. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:lambda:&#91;a-z0-9\-&#93;*:&#91;0-9&#93;&#123;12&#125;:function:.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="WorkteamArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the work team assigned to the job. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z0-9\-&#93;*:&#91;0-9&#93;&#123;12&#125;:workteam/.*&lt;/code&gt;)</td>
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
    <td><a href="#describe_labeling_job"><CopyableCode code="describe_labeling_job" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about a labeling job.</td>
</tr>
<tr>
    <td><a href="#list_labeling_jobs"><CopyableCode code="list_labeling_jobs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets a list of labeling jobs.</td>
</tr>
<tr>
    <td><a href="#create_labeling_job"><CopyableCode code="create_labeling_job" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-LabelingJobName"><code>LabelingJobName</code></a>, <a href="#parameter-LabelAttributeName"><code>LabelAttributeName</code></a>, <a href="#parameter-InputConfig"><code>InputConfig</code></a>, <a href="#parameter-OutputConfig"><code>OutputConfig</code></a>, <a href="#parameter-RoleArn"><code>RoleArn</code></a>, <a href="#parameter-HumanTaskConfig"><code>HumanTaskConfig</code></a></td>
    <td></td>
    <td>Creates a job that uses workers to label the data objects in your input dataset. You can use the labeled data to train machine learning models. You can select your workforce from one of three providers: A private workforce that you create. It can include employees, contractors, and outside experts. Use a private workforce when want the data to stay within your organization or when a specific set of skills is required. One or more vendors that you select from the Amazon Web Services Marketplace. Vendors provide expertise in specific areas. The Amazon Mechanical Turk workforce. This is the largest workforce, but it should only be used for public data or data that has been stripped of any personally identifiable information. You can also use automated data labeling to reduce the number of data objects that need to be labeled by a human. Automated data labeling uses active learning to determine if a data object can be labeled by machine or if it needs to be sent to a human worker. For more information, see Using Automated Data Labeling. The data objects to be labeled are contained in an Amazon S3 bucket. You create a manifest file that describes the location of each object. For more information, see Using Input and Output Data. The output can be used as the manifest file for another labeling job or as training data for your machine learning models. You can use this operation to create a static labeling job or a streaming labeling job. A static labeling job stops if all data objects in the input manifest file identified in ManifestS3Uri have been labeled. A streaming labeling job runs perpetually until it is manually stopped, or remains idle for 10 days. You can send new data objects to an active (InProgress) streaming labeling job in real time. To learn how to create a static labeling job, see Create a Labeling Job (API) in the Amazon SageMaker Developer Guide. To learn how to create a streaming labeling job, see Create a Streaming Labeling Job.</td>
</tr>
<tr>
    <td><a href="#stop_labeling_job"><CopyableCode code="stop_labeling_job" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-LabelingJobName"><code>LabelingJobName</code></a></td>
    <td></td>
    <td>Stops a running labeling job. A job that is stopped cannot be restarted. Any results obtained before the job is stopped are placed in the Amazon S3 output bucket.</td>
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
    defaultValue="describe_labeling_job"
    values={[
        { label: 'describe_labeling_job', value: 'describe_labeling_job' },
        { label: 'list_labeling_jobs', value: 'list_labeling_jobs' }
    ]}
>
<TabItem value="describe_labeling_job">

Gets information about a labeling job.

```sql
SELECT
CreationTime,
FailureReason,
HumanTaskConfig,
InputConfig,
JobReferenceCode,
LabelAttributeName,
LabelCategoryConfigS3Uri,
LabelCounters,
LabelingJobAlgorithmsConfig,
LabelingJobArn,
LabelingJobName,
LabelingJobOutput,
LabelingJobStatus,
LastModifiedTime,
OutputConfig,
RoleArn,
StoppingConditions,
Tags
FROM aws.sagemaker.labeling_jobs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_labeling_jobs">

Gets a list of labeling jobs.

```sql
SELECT
AnnotationConsolidationLambdaArn,
CreationTime,
FailureReason,
InputConfig,
LabelCounters,
LabelingJobArn,
LabelingJobName,
LabelingJobOutput,
LabelingJobStatus,
LastModifiedTime,
PreHumanTaskLambdaArn,
WorkteamArn
FROM aws.sagemaker.labeling_jobs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_labeling_job"
    values={[
        { label: 'create_labeling_job', value: 'create_labeling_job' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_labeling_job">

Creates a job that uses workers to label the data objects in your input dataset. You can use the labeled data to train machine learning models. You can select your workforce from one of three providers: A private workforce that you create. It can include employees, contractors, and outside experts. Use a private workforce when want the data to stay within your organization or when a specific set of skills is required. One or more vendors that you select from the Amazon Web Services Marketplace. Vendors provide expertise in specific areas. The Amazon Mechanical Turk workforce. This is the largest workforce, but it should only be used for public data or data that has been stripped of any personally identifiable information. You can also use automated data labeling to reduce the number of data objects that need to be labeled by a human. Automated data labeling uses active learning to determine if a data object can be labeled by machine or if it needs to be sent to a human worker. For more information, see Using Automated Data Labeling. The data objects to be labeled are contained in an Amazon S3 bucket. You create a manifest file that describes the location of each object. For more information, see Using Input and Output Data. The output can be used as the manifest file for another labeling job or as training data for your machine learning models. You can use this operation to create a static labeling job or a streaming labeling job. A static labeling job stops if all data objects in the input manifest file identified in ManifestS3Uri have been labeled. A streaming labeling job runs perpetually until it is manually stopped, or remains idle for 10 days. You can send new data objects to an active (InProgress) streaming labeling job in real time. To learn how to create a static labeling job, see Create a Labeling Job (API) in the Amazon SageMaker Developer Guide. To learn how to create a streaming labeling job, see Create a Streaming Labeling Job.

```sql
INSERT INTO aws.sagemaker.labeling_jobs (
LabelingJobName,
LabelAttributeName,
InputConfig,
OutputConfig,
RoleArn,
LabelCategoryConfigS3Uri,
StoppingConditions,
LabelingJobAlgorithmsConfig,
HumanTaskConfig,
Tags,
region
)
SELECT 
'{{ LabelingJobName }}' /* required */,
'{{ LabelAttributeName }}' /* required */,
'{{ InputConfig }}' /* required */,
'{{ OutputConfig }}' /* required */,
'{{ RoleArn }}' /* required */,
'{{ LabelCategoryConfigS3Uri }}',
'{{ StoppingConditions }}',
'{{ LabelingJobAlgorithmsConfig }}',
'{{ HumanTaskConfig }}' /* required */,
'{{ Tags }}',
'{{ region }}'
RETURNING
LabelingJobArn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: labeling_jobs
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the labeling_jobs resource.
    - name: LabelingJobName
      value: "{{ LabelingJobName }}"
      description: |
        The name of the labeling job. This name is used to identify the job in a list of labeling jobs. Labeling job names must be unique within an Amazon Web Services account and region. LabelingJobName is not case sensitive. For example, Example-job and example-job are considered the same labeling job name by Ground Truth.
    - name: LabelAttributeName
      value: "{{ LabelAttributeName }}"
      description: |
        The attribute name to use for the label in the output manifest file. This is the key for the key/value pair formed with the label that a worker assigns to the object. The LabelAttributeName must meet the following requirements. The name can't end with "-metadata". If you are using one of the built-in task types or one of the following, the attribute name must end with "-ref". Image semantic segmentation (SemanticSegmentation) and adjustment (AdjustmentSemanticSegmentation) labeling jobs for this task type. One exception is that verification (VerificationSemanticSegmentation) must not end with -"ref". Video frame object detection (VideoObjectDetection), and adjustment and verification (AdjustmentVideoObjectDetection) labeling jobs for this task type. Video frame object tracking (VideoObjectTracking), and adjustment and verification (AdjustmentVideoObjectTracking) labeling jobs for this task type. 3D point cloud semantic segmentation (3DPointCloudSemanticSegmentation), and adjustment and verification (Adjustment3DPointCloudSemanticSegmentation) labeling jobs for this task type. 3D point cloud object tracking (3DPointCloudObjectTracking), and adjustment and verification (Adjustment3DPointCloudObjectTracking) labeling jobs for this task type. If you are creating an adjustment or verification labeling job, you must use a different LabelAttributeName than the one used in the original labeling job. The original labeling job is the Ground Truth labeling job that produced the labels that you want verified or adjusted. To learn more about adjustment and verification labeling jobs, see Verify and Adjust Labels.
    - name: InputConfig
      description: |
        Input data for the labeling job, such as the Amazon S3 location of the data objects and the location of the manifest file that describes the data objects. You must specify at least one of the following: S3DataSource or SnsDataSource. Use SnsDataSource to specify an SNS input topic for a streaming labeling job. If you do not specify and SNS input topic ARN, Ground Truth will create a one-time labeling job that stops after all data objects in the input manifest file have been labeled. Use S3DataSource to specify an input manifest file for both streaming and one-time labeling jobs. Adding an S3DataSource is optional if you use SnsDataSource to create a streaming labeling job. If you use the Amazon Mechanical Turk workforce, your input data should not include confidential information, personal information or protected health information. Use ContentClassifiers to specify that your data is free of personally identifiable information and adult content.
      value:
        DataSource:
          S3DataSource:
            ManifestS3Uri: "{{ ManifestS3Uri }}"
          SnsDataSource:
            SnsTopicArn: "{{ SnsTopicArn }}"
        DataAttributes:
          ContentClassifiers:
            - "{{ ContentClassifiers }}"
    - name: OutputConfig
      description: |
        The location of the output data and the Amazon Web Services Key Management Service key ID for the key used to encrypt the output data, if any.
      value:
        S3OutputPath: "{{ S3OutputPath }}"
        KmsKeyId: "{{ KmsKeyId }}"
        SnsTopicArn: "{{ SnsTopicArn }}"
    - name: RoleArn
      value: "{{ RoleArn }}"
      description: |
        The Amazon Resource Number (ARN) that Amazon SageMaker assumes to perform tasks on your behalf during data labeling. You must grant this role the necessary permissions so that Amazon SageMaker can successfully complete data labeling.
    - name: LabelCategoryConfigS3Uri
      value: "{{ LabelCategoryConfigS3Uri }}"
      description: |
        The S3 URI of the file, referred to as a label category configuration file, that defines the categories used to label the data objects. For 3D point cloud and video frame task types, you can add label category attributes and frame attributes to your label category configuration file. To learn how, see Create a Labeling Category Configuration File for 3D Point Cloud Labeling Jobs. For named entity recognition jobs, in addition to "labels", you must provide worker instructions in the label category configuration file using the "instructions" parameter: "instructions": {"shortInstruction":"\`<h1>\`Add header</h1>\`<p>\`Add Instructions</p>", "fullInstruction":"\`<p>\`Add additional instructions.</p>"}. For details and an example, see Create a Named Entity Recognition Labeling Job (API) . For all other built-in task types and custom tasks, your label category configuration file must be a JSON file in the following format. Identify the labels you want to use by replacing label_1, label_2,...,label_n with your label categories. { "document-version": "2018-11-28", "labels": [{"label": "label_1"},{"label": "label_2"},...{"label": "label_n"}] } Note the following about the label category configuration file: For image classification and text classification (single and multi-label) you must specify at least two label categories. For all other task types, the minimum number of label categories required is one. Each label category must be unique, you cannot specify duplicate label categories. If you create a 3D point cloud or video frame adjustment or verification labeling job, you must include auditLabelAttributeName in the label category configuration. Use this parameter to enter the LabelAttributeName of the labeling job you want to adjust or verify annotations of.
    - name: StoppingConditions
      description: |
        A set of conditions for stopping the labeling job. If any of the conditions are met, the job is automatically stopped. You can use these conditions to control the cost of data labeling.
      value:
        MaxHumanLabeledObjectCount: {{ MaxHumanLabeledObjectCount }}
        MaxPercentageOfInputDatasetLabeled: {{ MaxPercentageOfInputDatasetLabeled }}
    - name: LabelingJobAlgorithmsConfig
      description: |
        Configures the information required to perform automated data labeling.
      value:
        LabelingJobAlgorithmSpecificationArn: "{{ LabelingJobAlgorithmSpecificationArn }}"
        InitialActiveLearningModelArn: "{{ InitialActiveLearningModelArn }}"
        LabelingJobResourceConfig:
          VolumeKmsKeyId: "{{ VolumeKmsKeyId }}"
          VpcConfig:
            SecurityGroupIds:
              - "{{ SecurityGroupIds }}"
            Subnets:
              - "{{ Subnets }}"
    - name: HumanTaskConfig
      description: |
        Configures the labeling task and how it is presented to workers; including, but not limited to price, keywords, and batch size (task count).
      value:
        WorkteamArn: "{{ WorkteamArn }}"
        UiConfig:
          UiTemplateS3Uri: "{{ UiTemplateS3Uri }}"
          HumanTaskUiArn: "{{ HumanTaskUiArn }}"
        PreHumanTaskLambdaArn: "{{ PreHumanTaskLambdaArn }}"
        TaskKeywords:
          - "{{ TaskKeywords }}"
        TaskTitle: "{{ TaskTitle }}"
        TaskDescription: "{{ TaskDescription }}"
        NumberOfHumanWorkersPerDataObject: {{ NumberOfHumanWorkersPerDataObject }}
        TaskTimeLimitInSeconds: {{ TaskTimeLimitInSeconds }}
        TaskAvailabilityLifetimeInSeconds: {{ TaskAvailabilityLifetimeInSeconds }}
        MaxConcurrentTaskCount: {{ MaxConcurrentTaskCount }}
        AnnotationConsolidationConfig:
          AnnotationConsolidationLambdaArn: "{{ AnnotationConsolidationLambdaArn }}"
        PublicWorkforceTaskPrice:
          AmountInUsd:
            Dollars: {{ Dollars }}
            Cents: {{ Cents }}
            TenthFractionsOfACent: {{ TenthFractionsOfACent }}
    - name: Tags
      description: |
        An array of key/value pairs. For more information, see Using Cost Allocation Tags in the Amazon Web Services Billing and Cost Management User Guide.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="stop_labeling_job"
    values={[
        { label: 'stop_labeling_job', value: 'stop_labeling_job' }
    ]}
>
<TabItem value="stop_labeling_job">

Stops a running labeling job. A job that is stopped cannot be restarted. Any results obtained before the job is stopped are placed in the Amazon S3 output bucket.

```sql
EXEC aws.sagemaker.labeling_jobs.stop_labeling_job 
@region='{{ region }}' --required 
@@json=
'{
"LabelingJobName": "{{ LabelingJobName }}"
}'
;
```
</TabItem>
</Tabs>
