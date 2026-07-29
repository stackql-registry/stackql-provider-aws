--- 
title: model_import_jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - model_import_jobs
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

Creates, updates, deletes, gets or lists a <code>model_import_jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="model_import_jobs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bedrock.model_import_jobs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_model_import_job"
    values={[
        { label: 'get_model_import_job', value: 'get_model_import_job' },
        { label: 'list_model_import_jobs', value: 'list_model_import_jobs' }
    ]}
>
<TabItem value="get_model_import_job">

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
    <td>The time the resource was created.</td>
</tr>
<tr>
    <td><CopyableCode code="end_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>Time that the resource transitioned to terminal state.</td>
</tr>
<tr>
    <td><CopyableCode code="failure_message" /></td>
    <td><code>string</code></td>
    <td>Information about why the import job failed.</td>
</tr>
<tr>
    <td><CopyableCode code="imported_model_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the imported model. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:bedrock:&#91;a-z0-9-&#93;&#123;1,20&#125;:&#91;0-9&#93;&#123;12&#125;:imported-model/&#91;a-z0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="imported_model_kms_key_arn" /></td>
    <td><code>string</code></td>
    <td>The imported model is encrypted at rest using this key. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:kms:&#91;a-zA-Z0-9-&#93;*:&#91;0-9&#93;&#123;12&#125;:key/&#91;a-zA-Z0-9-&#93;&#123;36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="imported_model_name" /></td>
    <td><code>string</code></td>
    <td>The name of the imported model. (pattern: &lt;code&gt;(&#91;0-9a-zA-Z&#93;&#91;_-&#93;?)+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="job_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the import job. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:bedrock:&#91;a-z0-9-&#93;&#123;1,20&#125;:&#91;0-9&#93;&#123;12&#125;:model-import-job/&#91;a-z0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="job_name" /></td>
    <td><code>string</code></td>
    <td>The name of the import job. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9\+\-\.&#93;)*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>Time the resource was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="model_data_source" /></td>
    <td><code>object</code></td>
    <td>The data source of the model to import.</td>
</tr>
<tr>
    <td><CopyableCode code="role_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the IAM role associated with this job. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:iam::(&#91;0-9&#93;&#123;12&#125;)?:role/.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the job. A successful job transitions from in-progress to completed when the imported model is ready to use. If the job failed, the failure message contains information about why the job failed. (InProgress, Completed, Failed)</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_config" /></td>
    <td><code>object</code></td>
    <td>The configuration of a virtual private cloud (VPC). For more information, see Protect your data using Amazon Virtual Private Cloud and Amazon Web Services PrivateLink.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_model_import_jobs">

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
    <td>The time import job was created.</td>
</tr>
<tr>
    <td><CopyableCode code="end_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when import job ended.</td>
</tr>
<tr>
    <td><CopyableCode code="imported_model_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon resource Name (ARN) of the imported model. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:bedrock:&#91;a-z0-9-&#93;&#123;1,20&#125;:&#91;0-9&#93;&#123;12&#125;:imported-model/&#91;a-z0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="imported_model_name" /></td>
    <td><code>string</code></td>
    <td>The name of the imported model. (pattern: &lt;code&gt;(&#91;0-9a-zA-Z&#93;&#91;_-&#93;?)+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="job_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the import job. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:bedrock:&#91;a-z0-9-&#93;&#123;1,20&#125;:&#91;0-9&#93;&#123;12&#125;:model-import-job/&#91;a-z0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="job_name" /></td>
    <td><code>string</code></td>
    <td>The name of the import job. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9\+\-\.&#93;)*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the import job was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the imported job. (InProgress, Completed, Failed)</td>
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
    <td><a href="#get_model_import_job"><CopyableCode code="get_model_import_job" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-job_identifier"><code>job_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the properties associated with import model job, including the status of the job. For more information, see Import a customized model in the Amazon Bedrock User Guide.</td>
</tr>
<tr>
    <td><a href="#list_model_import_jobs"><CopyableCode code="list_model_import_jobs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-creationTimeAfter"><code>creationTimeAfter</code></a>, <a href="#parameter-creationTimeBefore"><code>creationTimeBefore</code></a>, <a href="#parameter-statusEquals"><code>statusEquals</code></a>, <a href="#parameter-nameContains"><code>nameContains</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-sortBy"><code>sortBy</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a></td>
    <td>Returns a list of import jobs you've submitted. You can filter the results to return based on one or more criteria. For more information, see Import a customized model in the Amazon Bedrock User Guide.</td>
</tr>
<tr>
    <td><a href="#create_model_import_job"><CopyableCode code="create_model_import_job" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-jobName"><code>jobName</code></a>, <a href="#parameter-importedModelName"><code>importedModelName</code></a>, <a href="#parameter-roleArn"><code>roleArn</code></a>, <a href="#parameter-modelDataSource"><code>modelDataSource</code></a></td>
    <td></td>
    <td>Creates a model import job to import model that you have customized in other environments, such as Amazon SageMaker. For more information, see Import a customized model</td>
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
    <td>The identifier of the import job.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-creationTimeAfter">
    <td><CopyableCode code="creationTimeAfter" /></td>
    <td><code>string (date-time)</code></td>
    <td>Return import jobs that were created after the specified time.</td>
</tr>
<tr id="parameter-creationTimeBefore">
    <td><CopyableCode code="creationTimeBefore" /></td>
    <td><code>string (date-time)</code></td>
    <td>Return import jobs that were created before the specified time.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in the response. If the total number of results is greater than this value, use the token returned in the response in the nextToken field when making another request to return the next batch of results.</td>
</tr>
<tr id="parameter-nameContains">
    <td><CopyableCode code="nameContains" /></td>
    <td><code>string</code></td>
    <td>Return imported jobs only if the job name contains these characters.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>If the total number of results is greater than the maxResults value provided in the request, enter the token returned in the nextToken field in the response in this field to return the next batch of results.</td>
</tr>
<tr id="parameter-sortBy">
    <td><CopyableCode code="sortBy" /></td>
    <td><code>string</code></td>
    <td>The field to sort by in the returned list of imported jobs.</td>
</tr>
<tr id="parameter-sortOrder">
    <td><CopyableCode code="sortOrder" /></td>
    <td><code>string</code></td>
    <td>Specifies whether to sort the results in ascending or descending order.</td>
</tr>
<tr id="parameter-statusEquals">
    <td><CopyableCode code="statusEquals" /></td>
    <td><code>string</code></td>
    <td>Return imported jobs with the specified status.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_model_import_job"
    values={[
        { label: 'get_model_import_job', value: 'get_model_import_job' },
        { label: 'list_model_import_jobs', value: 'list_model_import_jobs' }
    ]}
>
<TabItem value="get_model_import_job">

Retrieves the properties associated with import model job, including the status of the job. For more information, see Import a customized model in the Amazon Bedrock User Guide.

```sql
SELECT
creation_time,
end_time,
failure_message,
imported_model_arn,
imported_model_kms_key_arn,
imported_model_name,
job_arn,
job_name,
last_modified_time,
model_data_source,
role_arn,
status,
vpc_config
FROM aws.bedrock.model_import_jobs
WHERE job_identifier = '{{ job_identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_model_import_jobs">

Returns a list of import jobs you've submitted. You can filter the results to return based on one or more criteria. For more information, see Import a customized model in the Amazon Bedrock User Guide.

```sql
SELECT
creation_time,
end_time,
imported_model_arn,
imported_model_name,
job_arn,
job_name,
last_modified_time,
status
FROM aws.bedrock.model_import_jobs
WHERE region = '{{ region }}' -- required
AND creationTimeAfter = '{{ creationTimeAfter }}'
AND creationTimeBefore = '{{ creationTimeBefore }}'
AND statusEquals = '{{ statusEquals }}'
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
    defaultValue="create_model_import_job"
    values={[
        { label: 'create_model_import_job', value: 'create_model_import_job' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_model_import_job">

Creates a model import job to import model that you have customized in other environments, such as Amazon SageMaker. For more information, see Import a customized model

```sql
INSERT INTO aws.bedrock.model_import_jobs (
jobName,
importedModelName,
roleArn,
modelDataSource,
jobTags,
importedModelTags,
clientRequestToken,
vpcConfig,
importedModelKmsKeyId,
region
)
SELECT 
'{{ jobName }}' /* required */,
'{{ importedModelName }}' /* required */,
'{{ roleArn }}' /* required */,
'{{ modelDataSource }}' /* required */,
'{{ jobTags }}',
'{{ importedModelTags }}',
'{{ clientRequestToken }}',
'{{ vpcConfig }}',
'{{ importedModelKmsKeyId }}',
'{{ region }}'
RETURNING
job_arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: model_import_jobs
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the model_import_jobs resource.
    - name: jobName
      value: "{{ jobName }}"
    - name: importedModelName
      value: "{{ importedModelName }}"
    - name: roleArn
      value: "{{ roleArn }}"
    - name: modelDataSource
      description: |
        The data source of the model to import.
      value:
        s3DataSource:
          s3Uri: "{{ s3Uri }}"
    - name: jobTags
      value:
        - key: "{{ key }}"
          value: "{{ value }}"
    - name: importedModelTags
      value:
        - key: "{{ key }}"
          value: "{{ value }}"
    - name: clientRequestToken
      value: "{{ clientRequestToken }}"
    - name: vpcConfig
      description: |
        The configuration of a virtual private cloud (VPC). For more information, see Protect your data using Amazon Virtual Private Cloud and Amazon Web Services PrivateLink.
      value:
        subnetIds:
          - "{{ subnetIds }}"
        securityGroupIds:
          - "{{ securityGroupIds }}"
    - name: importedModelKmsKeyId
      value: "{{ importedModelKmsKeyId }}"
`}</CodeBlock>

</TabItem>
</Tabs>
