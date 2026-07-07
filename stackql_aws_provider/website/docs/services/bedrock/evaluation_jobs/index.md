--- 
title: evaluation_jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - evaluation_jobs
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

Creates, updates, deletes, gets or lists an <code>evaluation_jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="evaluation_jobs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bedrock.evaluation_jobs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_evaluation_job"
    values={[
        { label: 'get_evaluation_job', value: 'get_evaluation_job' },
        { label: 'list_evaluation_jobs', value: 'list_evaluation_jobs' }
    ]}
>
<TabItem value="get_evaluation_job">

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
    <td><CopyableCode code="applicationType" /></td>
    <td><code>string</code></td>
    <td>Specifies whether the evaluation job is for evaluating a model or evaluating a knowledge base (retrieval and response generation). (ModelEvaluation, RagEvaluation)</td>
</tr>
<tr>
    <td><CopyableCode code="creationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the evaluation job was created.</td>
</tr>
<tr>
    <td><CopyableCode code="customerEncryptionKeyId" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the customer managed encryption key specified when the evaluation job was created. (pattern: &lt;code&gt;(arn:aws(-&#91;^:&#93;+)?:kms:&#91;a-zA-Z0-9-&#93;*:&#91;0-9&#93;&#123;12&#125;:((key/&#91;a-zA-Z0-9-&#93;&#123;36&#125;)|(alias/&#91;a-zA-Z0-9-_/&#93;+)))|(&#91;a-zA-Z0-9-&#93;&#123;36&#125;)|(alias/&#91;a-zA-Z0-9-_/&#93;+)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="evaluationConfig" /></td>
    <td><code>object</code></td>
    <td>The configuration details of either an automated or human-based evaluation job.</td>
</tr>
<tr>
    <td><CopyableCode code="failureMessages" /></td>
    <td><code>array</code></td>
    <td>A list of strings that specify why the evaluation job failed to create.</td>
</tr>
<tr>
    <td><CopyableCode code="inferenceConfig" /></td>
    <td><code>object</code></td>
    <td>Contains the configuration details of the inference model used for the evaluation job.</td>
</tr>
<tr>
    <td><CopyableCode code="jobArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the evaluation job. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:bedrock:&#91;a-z0-9-&#93;&#123;1,20&#125;:&#91;0-9&#93;&#123;12&#125;:evaluation-job/&#91;a-z0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="jobDescription" /></td>
    <td><code>string</code></td>
    <td>The description of the evaluation job. (pattern: &lt;code&gt;.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="jobName" /></td>
    <td><code>string</code></td>
    <td>The name for the evaluation job. (pattern: &lt;code&gt;&#91;a-z0-9&#93;(-*&#91;a-z0-9&#93;)&#123;0,62&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="jobType" /></td>
    <td><code>string</code></td>
    <td>Specifies whether the evaluation job is automated or human-based. (Human, Automated)</td>
</tr>
<tr>
    <td><CopyableCode code="lastModifiedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the evaluation job was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="outputDataConfig" /></td>
    <td><code>object</code></td>
    <td>The Amazon S3 location where the results of your evaluation job are saved.</td>
</tr>
<tr>
    <td><CopyableCode code="roleArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the IAM service role used in the evaluation job. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:iam::(&#91;0-9&#93;&#123;12&#125;)?:role/.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the evaluation job. (InProgress, Completed, Failed, Stopping, Stopped, Deleting)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_evaluation_jobs">

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
    <td><CopyableCode code="applicationType" /></td>
    <td><code>string</code></td>
    <td>Specifies whether the evaluation job is for evaluating a model or evaluating a knowledge base (retrieval and response generation). (ModelEvaluation, RagEvaluation)</td>
</tr>
<tr>
    <td><CopyableCode code="creationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the evaluation job was created.</td>
</tr>
<tr>
    <td><CopyableCode code="customMetricsEvaluatorModelIdentifiers" /></td>
    <td><code>array</code></td>
    <td>The Amazon Resource Names (ARNs) of the models used to compute custom metrics in an Amazon Bedrock evaluation job.</td>
</tr>
<tr>
    <td><CopyableCode code="evaluationTaskTypes" /></td>
    <td><code>array</code></td>
    <td>The type of task for model evaluation.</td>
</tr>
<tr>
    <td><CopyableCode code="evaluatorModelIdentifiers" /></td>
    <td><code>array</code></td>
    <td>The Amazon Resource Names (ARNs) of the models used to compute the metrics for a knowledge base evaluation job.</td>
</tr>
<tr>
    <td><CopyableCode code="inferenceConfigSummary" /></td>
    <td><code>object</code></td>
    <td>Identifies the models, Knowledge Bases, or other RAG sources evaluated in a model or Knowledge Base evaluation job.</td>
</tr>
<tr>
    <td><CopyableCode code="jobArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the evaluation job. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:bedrock:&#91;a-z0-9-&#93;&#123;1,20&#125;:&#91;0-9&#93;&#123;12&#125;:evaluation-job/&#91;a-z0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="jobName" /></td>
    <td><code>string</code></td>
    <td>The name for the evaluation job. (pattern: &lt;code&gt;&#91;a-z0-9&#93;(-*&#91;a-z0-9&#93;)&#123;0,62&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="jobType" /></td>
    <td><code>string</code></td>
    <td>Specifies whether the evaluation job is automated or human-based. (Human, Automated)</td>
</tr>
<tr>
    <td><CopyableCode code="modelIdentifiers" /></td>
    <td><code>array</code></td>
    <td>The Amazon Resource Names (ARNs) of the model(s) used for the evaluation job.</td>
</tr>
<tr>
    <td><CopyableCode code="ragIdentifiers" /></td>
    <td><code>array</code></td>
    <td>The Amazon Resource Names (ARNs) of the knowledge base resources used for a knowledge base evaluation job.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the evaluation job. (InProgress, Completed, Failed, Stopping, Stopped, Deleting)</td>
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
    <td><a href="#get_evaluation_job"><CopyableCode code="get_evaluation_job" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-job_identifier"><code>job_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about an evaluation job, such as the status of the job.</td>
</tr>
<tr>
    <td><a href="#list_evaluation_jobs"><CopyableCode code="list_evaluation_jobs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-creationTimeAfter"><code>creationTimeAfter</code></a>, <a href="#parameter-creationTimeBefore"><code>creationTimeBefore</code></a>, <a href="#parameter-statusEquals"><code>statusEquals</code></a>, <a href="#parameter-applicationTypeEquals"><code>applicationTypeEquals</code></a>, <a href="#parameter-nameContains"><code>nameContains</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-sortBy"><code>sortBy</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a></td>
    <td>Lists all existing evaluation jobs.</td>
</tr>
<tr>
    <td><a href="#create_evaluation_job"><CopyableCode code="create_evaluation_job" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-jobName"><code>jobName</code></a>, <a href="#parameter-roleArn"><code>roleArn</code></a>, <a href="#parameter-evaluationConfig"><code>evaluationConfig</code></a>, <a href="#parameter-inferenceConfig"><code>inferenceConfig</code></a>, <a href="#parameter-outputDataConfig"><code>outputDataConfig</code></a></td>
    <td></td>
    <td>Creates an evaluation job.</td>
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
<tr id="parameter-job_identifier">
    <td><CopyableCode code="job_identifier" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the evaluation job you want get information on.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-applicationTypeEquals">
    <td><CopyableCode code="applicationTypeEquals" /></td>
    <td><code>string</code></td>
    <td>A filter to only list evaluation jobs that are either model evaluations or knowledge base evaluations.</td>
</tr>
<tr id="parameter-creationTimeAfter">
    <td><CopyableCode code="creationTimeAfter" /></td>
    <td><code>string (date-time)</code></td>
    <td>A filter to only list evaluation jobs created after a specified time.</td>
</tr>
<tr id="parameter-creationTimeBefore">
    <td><CopyableCode code="creationTimeBefore" /></td>
    <td><code>string (date-time)</code></td>
    <td>A filter to only list evaluation jobs created before a specified time.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return.</td>
</tr>
<tr id="parameter-nameContains">
    <td><CopyableCode code="nameContains" /></td>
    <td><code>string</code></td>
    <td>A filter to only list evaluation jobs that contain a specified string in the job name.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>Continuation token from the previous response, for Amazon Bedrock to list the next set of results.</td>
</tr>
<tr id="parameter-sortBy">
    <td><CopyableCode code="sortBy" /></td>
    <td><code>string</code></td>
    <td>Specifies a creation time to sort the list of evaluation jobs by when they were created.</td>
</tr>
<tr id="parameter-sortOrder">
    <td><CopyableCode code="sortOrder" /></td>
    <td><code>string</code></td>
    <td>Specifies whether to sort the list of evaluation jobs by either ascending or descending order.</td>
</tr>
<tr id="parameter-statusEquals">
    <td><CopyableCode code="statusEquals" /></td>
    <td><code>string</code></td>
    <td>A filter to only list evaluation jobs that are of a certain status.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_evaluation_job"
    values={[
        { label: 'get_evaluation_job', value: 'get_evaluation_job' },
        { label: 'list_evaluation_jobs', value: 'list_evaluation_jobs' }
    ]}
>
<TabItem value="get_evaluation_job">

Gets information about an evaluation job, such as the status of the job.

```sql
SELECT
applicationType,
creationTime,
customerEncryptionKeyId,
evaluationConfig,
failureMessages,
inferenceConfig,
jobArn,
jobDescription,
jobName,
jobType,
lastModifiedTime,
outputDataConfig,
roleArn,
status
FROM aws.bedrock.evaluation_jobs
WHERE job_identifier = '{{ job_identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_evaluation_jobs">

Lists all existing evaluation jobs.

```sql
SELECT
applicationType,
creationTime,
customMetricsEvaluatorModelIdentifiers,
evaluationTaskTypes,
evaluatorModelIdentifiers,
inferenceConfigSummary,
jobArn,
jobName,
jobType,
modelIdentifiers,
ragIdentifiers,
status
FROM aws.bedrock.evaluation_jobs
WHERE region = '{{ region }}' -- required
AND creationTimeAfter = '{{ creationTimeAfter }}'
AND creationTimeBefore = '{{ creationTimeBefore }}'
AND statusEquals = '{{ statusEquals }}'
AND applicationTypeEquals = '{{ applicationTypeEquals }}'
AND nameContains = '{{ nameContains }}'
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
    defaultValue="create_evaluation_job"
    values={[
        { label: 'create_evaluation_job', value: 'create_evaluation_job' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_evaluation_job">

Creates an evaluation job.

```sql
INSERT INTO aws.bedrock.evaluation_jobs (
jobName,
jobDescription,
clientRequestToken,
roleArn,
customerEncryptionKeyId,
jobTags,
applicationType,
evaluationConfig,
inferenceConfig,
outputDataConfig,
region
)
SELECT 
'{{ jobName }}' /* required */,
'{{ jobDescription }}',
'{{ clientRequestToken }}',
'{{ roleArn }}' /* required */,
'{{ customerEncryptionKeyId }}',
'{{ jobTags }}',
'{{ applicationType }}',
'{{ evaluationConfig }}' /* required */,
'{{ inferenceConfig }}' /* required */,
'{{ outputDataConfig }}' /* required */,
'{{ region }}'
RETURNING
jobArn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: evaluation_jobs
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the evaluation_jobs resource.
    - name: jobName
      value: "{{ jobName }}"
    - name: jobDescription
      value: "{{ jobDescription }}"
    - name: clientRequestToken
      value: "{{ clientRequestToken }}"
    - name: roleArn
      value: "{{ roleArn }}"
    - name: customerEncryptionKeyId
      value: "{{ customerEncryptionKeyId }}"
    - name: jobTags
      value:
        - key: "{{ key }}"
          value: "{{ value }}"
    - name: applicationType
      value: "{{ applicationType }}"
      valid_values: ['ModelEvaluation', 'RagEvaluation']
    - name: evaluationConfig
      description: |
        The configuration details of either an automated or human-based evaluation job.
      value:
        automated:
          datasetMetricConfigs:
            - taskType: "{{ taskType }}"
              dataset:
                name: "{{ name }}"
                datasetLocation:
                  s3Uri: "{{ s3Uri }}"
              metricNames: "{{ metricNames }}"
          evaluatorModelConfig:
            bedrockEvaluatorModels:
              - modelIdentifier: "{{ modelIdentifier }}"
          customMetricConfig:
            customMetrics:
              - customMetricDefinition:
                  name: "{{ name }}"
                  instructions: "{{ instructions }}"
                  ratingScale: "{{ ratingScale }}"
            evaluatorModelConfig:
              bedrockEvaluatorModels:
                - modelIdentifier: "{{ modelIdentifier }}"
        human:
          humanWorkflowConfig:
            flowDefinitionArn: "{{ flowDefinitionArn }}"
            instructions: "{{ instructions }}"
          customMetrics:
            - name: "{{ name }}"
              description: "{{ description }}"
              ratingMethod: "{{ ratingMethod }}"
          datasetMetricConfigs:
            - taskType: "{{ taskType }}"
              dataset:
                name: "{{ name }}"
                datasetLocation:
                  s3Uri: "{{ s3Uri }}"
              metricNames: "{{ metricNames }}"
    - name: inferenceConfig
      description: |
        The configuration details of the inference model for an evaluation job. For automated model evaluation jobs, only a single model is supported. For human-based model evaluation jobs, your annotator can compare the responses for up to two different models.
      value:
        models:
          - bedrockModel:
              modelIdentifier: "{{ modelIdentifier }}"
              inferenceParams: "{{ inferenceParams }}"
              performanceConfig:
                latency: "{{ latency }}"
            precomputedInferenceSource:
              inferenceSourceIdentifier: "{{ inferenceSourceIdentifier }}"
        ragConfigs:
          - knowledgeBaseConfig:
              retrieveConfig:
                knowledgeBaseId: "{{ knowledgeBaseId }}"
                knowledgeBaseRetrievalConfiguration:
                  vectorSearchConfiguration: "{{ vectorSearchConfiguration }}"
              retrieveAndGenerateConfig:
                type_: "{{ type_ }}"
                knowledgeBaseConfiguration:
                  knowledgeBaseId: "{{ knowledgeBaseId }}"
                  modelArn: "{{ modelArn }}"
                  retrievalConfiguration: "{{ retrievalConfiguration }}"
                  generationConfiguration: "{{ generationConfiguration }}"
                  orchestrationConfiguration: "{{ orchestrationConfiguration }}"
                externalSourcesConfiguration:
                  modelArn: "{{ modelArn }}"
                  sources: "{{ sources }}"
                  generationConfiguration: "{{ generationConfiguration }}"
            precomputedRagSourceConfig:
              retrieveSourceConfig:
                ragSourceIdentifier: "{{ ragSourceIdentifier }}"
              retrieveAndGenerateSourceConfig:
                ragSourceIdentifier: "{{ ragSourceIdentifier }}"
    - name: outputDataConfig
      description: |
        The Amazon S3 location where the results of your evaluation job are saved.
      value:
        s3Uri: "{{ s3Uri }}"
`}</CodeBlock>

</TabItem>
</Tabs>
