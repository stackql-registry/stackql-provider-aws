--- 
title: jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - jobs
  - databrew
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

Creates, updates, deletes, gets or lists a <code>jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="jobs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.databrew.jobs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_job"
    values={[
        { label: 'describe_job', value: 'describe_job' },
        { label: 'list_jobs', value: 'list_jobs' }
    ]}
>
<TabItem value="describe_job">

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
    <td><CopyableCode code="CreateDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the job was created.</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedBy" /></td>
    <td><code>string</code></td>
    <td>The identifier (user name) of the user associated with the creation of the job.</td>
</tr>
<tr>
    <td><CopyableCode code="DataCatalogOutputs" /></td>
    <td><code>array</code></td>
    <td>One or more artifacts that represent the Glue Data Catalog output from running the job.</td>
</tr>
<tr>
    <td><CopyableCode code="DatabaseOutputs" /></td>
    <td><code>array</code></td>
    <td>Represents a list of JDBC database output objects which defines the output destination for a DataBrew recipe job to write into.</td>
</tr>
<tr>
    <td><CopyableCode code="DatasetName" /></td>
    <td><code>string</code></td>
    <td>The dataset that the job acts upon.</td>
</tr>
<tr>
    <td><CopyableCode code="EncryptionKeyArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of an encryption key that is used to protect the job.</td>
</tr>
<tr>
    <td><CopyableCode code="EncryptionMode" /></td>
    <td><code>string</code></td>
    <td>The encryption mode for the job, which can be one of the following: SSE-KMS - Server-side encryption with keys managed by KMS. SSE-S3 - Server-side encryption with keys managed by Amazon S3. (SSE-KMS, SSE-S3)</td>
</tr>
<tr>
    <td><CopyableCode code="JobSample" /></td>
    <td><code>object</code></td>
    <td>A sample configuration for profile jobs only, which determines the number of rows on which the profile job is run. If a JobSample value isn't provided, the default is used. The default value is CUSTOM_ROWS for the mode parameter and 20,000 for the size parameter.</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedBy" /></td>
    <td><code>string</code></td>
    <td>The identifier (user name) of the user who last modified the job.</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the job was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="LogSubscription" /></td>
    <td><code>string</code></td>
    <td>Indicates whether Amazon CloudWatch logging is enabled for this job. (ENABLE, DISABLE)</td>
</tr>
<tr>
    <td><CopyableCode code="MaxCapacity" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of compute nodes that DataBrew can consume when the job processes data.</td>
</tr>
<tr>
    <td><CopyableCode code="MaxRetries" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of times to retry the job after a job run fails.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the job.</td>
</tr>
<tr>
    <td><CopyableCode code="Outputs" /></td>
    <td><code>array</code></td>
    <td>One or more artifacts that represent the output from running the job.</td>
</tr>
<tr>
    <td><CopyableCode code="ProfileConfiguration" /></td>
    <td><code>object</code></td>
    <td>Configuration for profile jobs. Configuration can be used to select columns, do evaluations, and override default parameters of evaluations. When configuration is undefined, the profile job will apply default settings to all supported columns.</td>
</tr>
<tr>
    <td><CopyableCode code="ProjectName" /></td>
    <td><code>string</code></td>
    <td>The DataBrew project associated with this job.</td>
</tr>
<tr>
    <td><CopyableCode code="RecipeReference" /></td>
    <td><code>object</code></td>
    <td>Represents the name and version of a DataBrew recipe.</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the job.</td>
</tr>
<tr>
    <td><CopyableCode code="RoleArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the Identity and Access Management (IAM) role to be assumed when DataBrew runs the job.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>object</code></td>
    <td>Metadata tags associated with this job.</td>
</tr>
<tr>
    <td><CopyableCode code="Timeout" /></td>
    <td><code>integer</code></td>
    <td>The job's timeout in minutes. A job that attempts to run longer than this timeout period ends with a status of TIMEOUT.</td>
</tr>
<tr>
    <td><CopyableCode code="Type" /></td>
    <td><code>string</code></td>
    <td>The job type, which must be one of the following: PROFILE - The job analyzes the dataset to determine its size, data types, data distribution, and more. RECIPE - The job applies one or more transformations to a dataset. (PROFILE, RECIPE)</td>
</tr>
<tr>
    <td><CopyableCode code="ValidationConfigurations" /></td>
    <td><code>array</code></td>
    <td>List of validation configurations that are applied to the profile job.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_jobs">

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
    <td><CopyableCode code="AccountId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Web Services account that owns the job.</td>
</tr>
<tr>
    <td><CopyableCode code="CreateDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the job was created.</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedBy" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the user who created the job.</td>
</tr>
<tr>
    <td><CopyableCode code="DataCatalogOutputs" /></td>
    <td><code>array</code></td>
    <td>One or more artifacts that represent the Glue Data Catalog output from running the job.</td>
</tr>
<tr>
    <td><CopyableCode code="DatabaseOutputs" /></td>
    <td><code>array</code></td>
    <td>Represents a list of JDBC database output objects which defines the output destination for a DataBrew recipe job to write into.</td>
</tr>
<tr>
    <td><CopyableCode code="DatasetName" /></td>
    <td><code>string</code></td>
    <td>A dataset that the job is to process.</td>
</tr>
<tr>
    <td><CopyableCode code="EncryptionKeyArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of an encryption key that is used to protect the job output. For more information, see Encrypting data written by DataBrew jobs</td>
</tr>
<tr>
    <td><CopyableCode code="EncryptionMode" /></td>
    <td><code>string</code></td>
    <td>The encryption mode for the job, which can be one of the following: SSE-KMS - Server-side encryption with keys managed by KMS. SSE-S3 - Server-side encryption with keys managed by Amazon S3. (SSE-KMS, SSE-S3)</td>
</tr>
<tr>
    <td><CopyableCode code="JobSample" /></td>
    <td><code>object</code></td>
    <td>A sample configuration for profile jobs only, which determines the number of rows on which the profile job is run. If a JobSample value isn't provided, the default is used. The default value is CUSTOM_ROWS for the mode parameter and 20,000 for the size parameter.</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedBy" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the user who last modified the job.</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The modification date and time of the job.</td>
</tr>
<tr>
    <td><CopyableCode code="LogSubscription" /></td>
    <td><code>string</code></td>
    <td>The current status of Amazon CloudWatch logging for the job. (ENABLE, DISABLE)</td>
</tr>
<tr>
    <td><CopyableCode code="MaxCapacity" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of nodes that can be consumed when the job processes data.</td>
</tr>
<tr>
    <td><CopyableCode code="MaxRetries" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of times to retry the job after a job run fails.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The unique name of the job.</td>
</tr>
<tr>
    <td><CopyableCode code="Outputs" /></td>
    <td><code>array</code></td>
    <td>One or more artifacts that represent output from running the job.</td>
</tr>
<tr>
    <td><CopyableCode code="ProjectName" /></td>
    <td><code>string</code></td>
    <td>The name of the project that the job is associated with.</td>
</tr>
<tr>
    <td><CopyableCode code="RecipeReference" /></td>
    <td><code>object</code></td>
    <td>Represents the name and version of a DataBrew recipe.</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceArn" /></td>
    <td><code>string</code></td>
    <td>The unique Amazon Resource Name (ARN) for the job.</td>
</tr>
<tr>
    <td><CopyableCode code="RoleArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the role to be assumed for this job.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>object</code></td>
    <td>Metadata tags that have been applied to the job.</td>
</tr>
<tr>
    <td><CopyableCode code="Timeout" /></td>
    <td><code>integer</code></td>
    <td>The job's timeout in minutes. A job that attempts to run longer than this timeout period ends with a status of TIMEOUT.</td>
</tr>
<tr>
    <td><CopyableCode code="Type" /></td>
    <td><code>string</code></td>
    <td>The job type of the job, which must be one of the following: PROFILE - A job to analyze a dataset, to determine its size, data types, data distribution, and more. RECIPE - A job to apply one or more transformations to a dataset. (PROFILE, RECIPE)</td>
</tr>
<tr>
    <td><CopyableCode code="ValidationConfigurations" /></td>
    <td><code>array</code></td>
    <td>List of validation configurations that are applied to the profile job.</td>
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
    <td><a href="#describe_job"><CopyableCode code="describe_job" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the definition of a specific DataBrew job.</td>
</tr>
<tr>
    <td><a href="#list_jobs"><CopyableCode code="list_jobs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-datasetName"><code>datasetName</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-projectName"><code>projectName</code></a></td>
    <td>Lists all of the DataBrew jobs that are defined.</td>
</tr>
<tr>
    <td><a href="#create_profile_job"><CopyableCode code="create_profile_job" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DatasetName"><code>DatasetName</code></a>, <a href="#parameter-OutputLocation"><code>OutputLocation</code></a>, <a href="#parameter-RoleArn"><code>RoleArn</code></a></td>
    <td></td>
    <td>Creates a new job to analyze a dataset and create its data profile.</td>
</tr>
<tr>
    <td><a href="#create_recipe_job"><CopyableCode code="create_recipe_job" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-RoleArn"><code>RoleArn</code></a></td>
    <td></td>
    <td>Creates a new job to transform input data, using steps defined in an existing Glue DataBrew recipe</td>
</tr>
<tr>
    <td><a href="#update_profile_job"><CopyableCode code="update_profile_job" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-OutputLocation"><code>OutputLocation</code></a>, <a href="#parameter-RoleArn"><code>RoleArn</code></a></td>
    <td></td>
    <td>Modifies the definition of an existing profile job.</td>
</tr>
<tr>
    <td><a href="#update_recipe_job"><CopyableCode code="update_recipe_job" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-RoleArn"><code>RoleArn</code></a></td>
    <td></td>
    <td>Modifies the definition of an existing DataBrew recipe job.</td>
</tr>
<tr>
    <td><a href="#delete_job"><CopyableCode code="delete_job" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified DataBrew job.</td>
</tr>
<tr>
    <td><a href="#start_job_run"><CopyableCode code="start_job_run" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Runs a DataBrew job.</td>
</tr>
<tr>
    <td><a href="#stop_job_run"><CopyableCode code="stop_job_run" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-run_id"><code>run_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Stops a particular run of a job.</td>
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
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the job to be stopped.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-run_id">
    <td><CopyableCode code="run_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the job run to be stopped.</td>
</tr>
<tr id="parameter-datasetName">
    <td><CopyableCode code="datasetName" /></td>
    <td><code>string</code></td>
    <td>The name of a dataset. Using this parameter indicates to return only those jobs that act on the specified dataset.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in this request.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>A token generated by DataBrew that specifies where to continue pagination if a previous request was truncated. To get the next set of pages, pass in the NextToken value from the response object of the previous page call.</td>
</tr>
<tr id="parameter-projectName">
    <td><CopyableCode code="projectName" /></td>
    <td><code>string</code></td>
    <td>The name of a project. Using this parameter indicates to return only those jobs that are associated with the specified project.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_job"
    values={[
        { label: 'describe_job', value: 'describe_job' },
        { label: 'list_jobs', value: 'list_jobs' }
    ]}
>
<TabItem value="describe_job">

Returns the definition of a specific DataBrew job.

```sql
SELECT
CreateDate,
CreatedBy,
DataCatalogOutputs,
DatabaseOutputs,
DatasetName,
EncryptionKeyArn,
EncryptionMode,
JobSample,
LastModifiedBy,
LastModifiedDate,
LogSubscription,
MaxCapacity,
MaxRetries,
Name,
Outputs,
ProfileConfiguration,
ProjectName,
RecipeReference,
ResourceArn,
RoleArn,
Tags,
Timeout,
Type,
ValidationConfigurations
FROM aws.databrew.jobs
WHERE name = '{{ name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_jobs">

Lists all of the DataBrew jobs that are defined.

```sql
SELECT
AccountId,
CreateDate,
CreatedBy,
DataCatalogOutputs,
DatabaseOutputs,
DatasetName,
EncryptionKeyArn,
EncryptionMode,
JobSample,
LastModifiedBy,
LastModifiedDate,
LogSubscription,
MaxCapacity,
MaxRetries,
Name,
Outputs,
ProjectName,
RecipeReference,
ResourceArn,
RoleArn,
Tags,
Timeout,
Type,
ValidationConfigurations
FROM aws.databrew.jobs
WHERE region = '{{ region }}' -- required
AND datasetName = '{{ datasetName }}'
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
AND projectName = '{{ projectName }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_profile_job"
    values={[
        { label: 'create_profile_job', value: 'create_profile_job' },
        { label: 'create_recipe_job', value: 'create_recipe_job' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_profile_job">

Creates a new job to analyze a dataset and create its data profile.

```sql
INSERT INTO aws.databrew.jobs (
DatasetName,
EncryptionKeyArn,
EncryptionMode,
Name,
LogSubscription,
MaxCapacity,
MaxRetries,
OutputLocation,
Configuration,
ValidationConfigurations,
RoleArn,
Tags,
Timeout,
JobSample,
region
)
SELECT 
'{{ DatasetName }}' /* required */,
'{{ EncryptionKeyArn }}',
'{{ EncryptionMode }}',
'{{ Name }}',
'{{ LogSubscription }}',
{{ MaxCapacity }},
{{ MaxRetries }},
'{{ OutputLocation }}' /* required */,
'{{ Configuration }}',
'{{ ValidationConfigurations }}',
'{{ RoleArn }}' /* required */,
'{{ Tags }}',
{{ Timeout }},
'{{ JobSample }}',
'{{ region }}'
RETURNING
Name
;
```
</TabItem>
<TabItem value="create_recipe_job">

Creates a new job to transform input data, using steps defined in an existing Glue DataBrew recipe

```sql
INSERT INTO aws.databrew.jobs (
DatasetName,
EncryptionKeyArn,
EncryptionMode,
Name,
LogSubscription,
MaxCapacity,
MaxRetries,
Outputs,
DataCatalogOutputs,
DatabaseOutputs,
ProjectName,
RecipeReference,
RoleArn,
Tags,
Timeout,
region
)
SELECT 
'{{ DatasetName }}',
'{{ EncryptionKeyArn }}',
'{{ EncryptionMode }}',
'{{ Name }}',
'{{ LogSubscription }}',
{{ MaxCapacity }},
{{ MaxRetries }},
'{{ Outputs }}',
'{{ DataCatalogOutputs }}',
'{{ DatabaseOutputs }}',
'{{ ProjectName }}',
'{{ RecipeReference }}',
'{{ RoleArn }}' /* required */,
'{{ Tags }}',
{{ Timeout }},
'{{ region }}'
RETURNING
Name
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: jobs
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the jobs resource.
    - name: DatasetName
      value: "{{ DatasetName }}"
    - name: EncryptionKeyArn
      value: "{{ EncryptionKeyArn }}"
    - name: EncryptionMode
      value: "{{ EncryptionMode }}"
      valid_values: ['SSE-KMS', 'SSE-S3']
    - name: Name
      value: "{{ Name }}"
    - name: LogSubscription
      value: "{{ LogSubscription }}"
      valid_values: ['ENABLE', 'DISABLE']
    - name: MaxCapacity
      value: {{ MaxCapacity }}
    - name: MaxRetries
      value: {{ MaxRetries }}
    - name: OutputLocation
      description: |
        Represents an Amazon S3 location (bucket name, bucket owner, and object key) where DataBrew can read input data, or write output from a job.
      value:
        Bucket: "{{ Bucket }}"
        Key: "{{ Key }}"
        BucketOwner: "{{ BucketOwner }}"
    - name: Configuration
      description: |
        Configuration for profile jobs. Configuration can be used to select columns, do evaluations, and override default parameters of evaluations. When configuration is undefined, the profile job will apply default settings to all supported columns.
      value:
        DatasetStatisticsConfiguration:
          IncludedStatistics:
            - "{{ IncludedStatistics }}"
          Overrides:
            - Statistic: "{{ Statistic }}"
              Parameters: "{{ Parameters }}"
        ProfileColumns:
          - Regex: "{{ Regex }}"
            Name: "{{ Name }}"
        ColumnStatisticsConfigurations:
          - Selectors: "{{ Selectors }}"
            Statistics:
              IncludedStatistics:
                - "{{ IncludedStatistics }}"
              Overrides:
                - Statistic: "{{ Statistic }}"
                  Parameters: "{{ Parameters }}"
        EntityDetectorConfiguration:
          EntityTypes:
            - "{{ EntityTypes }}"
          AllowedStatistics:
            - Statistics: "{{ Statistics }}"
    - name: ValidationConfigurations
      value:
        - RulesetArn: "{{ RulesetArn }}"
          ValidationMode: "{{ ValidationMode }}"
    - name: RoleArn
      value: "{{ RoleArn }}"
    - name: Tags
      value: "{{ Tags }}"
    - name: Timeout
      value: {{ Timeout }}
    - name: JobSample
      description: |
        A sample configuration for profile jobs only, which determines the number of rows on which the profile job is run. If a JobSample value isn't provided, the default is used. The default value is CUSTOM_ROWS for the mode parameter and 20,000 for the size parameter.
      value:
        Mode: "{{ Mode }}"
        Size: {{ Size }}
    - name: Outputs
      value:
        - CompressionFormat: "{{ CompressionFormat }}"
          Format: "{{ Format }}"
          PartitionColumns: "{{ PartitionColumns }}"
          Location:
            Bucket: "{{ Bucket }}"
            Key: "{{ Key }}"
            BucketOwner: "{{ BucketOwner }}"
          Overwrite: {{ Overwrite }}
          FormatOptions:
            Csv:
              Delimiter: "{{ Delimiter }}"
          MaxOutputFiles: {{ MaxOutputFiles }}
    - name: DataCatalogOutputs
      value:
        - CatalogId: "{{ CatalogId }}"
          DatabaseName: "{{ DatabaseName }}"
          TableName: "{{ TableName }}"
          S3Options:
            Location:
              Bucket: "{{ Bucket }}"
              Key: "{{ Key }}"
              BucketOwner: "{{ BucketOwner }}"
          DatabaseOptions:
            TempDirectory:
              Bucket: "{{ Bucket }}"
              Key: "{{ Key }}"
              BucketOwner: "{{ BucketOwner }}"
            TableName: "{{ TableName }}"
          Overwrite: {{ Overwrite }}
    - name: DatabaseOutputs
      value:
        - GlueConnectionName: "{{ GlueConnectionName }}"
          DatabaseOptions:
            TempDirectory:
              Bucket: "{{ Bucket }}"
              Key: "{{ Key }}"
              BucketOwner: "{{ BucketOwner }}"
            TableName: "{{ TableName }}"
          DatabaseOutputMode: "{{ DatabaseOutputMode }}"
    - name: ProjectName
      value: "{{ ProjectName }}"
    - name: RecipeReference
      description: |
        Represents the name and version of a DataBrew recipe.
      value:
        Name: "{{ Name }}"
        RecipeVersion: "{{ RecipeVersion }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_profile_job"
    values={[
        { label: 'update_profile_job', value: 'update_profile_job' },
        { label: 'update_recipe_job', value: 'update_recipe_job' }
    ]}
>
<TabItem value="update_profile_job">

Modifies the definition of an existing profile job.

```sql
UPDATE aws.databrew.jobs
SET 
Configuration = '{{ Configuration }}',
EncryptionKeyArn = '{{ EncryptionKeyArn }}',
EncryptionMode = '{{ EncryptionMode }}',
LogSubscription = '{{ LogSubscription }}',
MaxCapacity = {{ MaxCapacity }},
MaxRetries = {{ MaxRetries }},
OutputLocation = '{{ OutputLocation }}',
ValidationConfigurations = '{{ ValidationConfigurations }}',
RoleArn = '{{ RoleArn }}',
Timeout = {{ Timeout }},
JobSample = '{{ JobSample }}'
WHERE 
name = '{{ name }}' --required
AND region = '{{ region }}' --required
AND OutputLocation = '{{ OutputLocation }}' --required
AND RoleArn = '{{ RoleArn }}' --required
RETURNING
Name;
```
</TabItem>
<TabItem value="update_recipe_job">

Modifies the definition of an existing DataBrew recipe job.

```sql
UPDATE aws.databrew.jobs
SET 
EncryptionKeyArn = '{{ EncryptionKeyArn }}',
EncryptionMode = '{{ EncryptionMode }}',
LogSubscription = '{{ LogSubscription }}',
MaxCapacity = {{ MaxCapacity }},
MaxRetries = {{ MaxRetries }},
Outputs = '{{ Outputs }}',
DataCatalogOutputs = '{{ DataCatalogOutputs }}',
DatabaseOutputs = '{{ DatabaseOutputs }}',
RoleArn = '{{ RoleArn }}',
Timeout = {{ Timeout }}
WHERE 
name = '{{ name }}' --required
AND region = '{{ region }}' --required
AND RoleArn = '{{ RoleArn }}' --required
RETURNING
Name;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_job"
    values={[
        { label: 'delete_job', value: 'delete_job' }
    ]}
>
<TabItem value="delete_job">

Deletes the specified DataBrew job.

```sql
DELETE FROM aws.databrew.jobs
WHERE name = '{{ name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="start_job_run"
    values={[
        { label: 'start_job_run', value: 'start_job_run' },
        { label: 'stop_job_run', value: 'stop_job_run' }
    ]}
>
<TabItem value="start_job_run">

Runs a DataBrew job.

```sql
EXEC aws.databrew.jobs.start_job_run 
@name='{{ name }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
<TabItem value="stop_job_run">

Stops a particular run of a job.

```sql
EXEC aws.databrew.jobs.stop_job_run 
@name='{{ name }}' --required, 
@run_id='{{ run_id }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
