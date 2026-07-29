--- 
title: jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - jobs
  - dataexchange
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.dataexchange.jobs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_job"
    values={[
        { label: 'get_job', value: 'get_job' },
        { label: 'list_jobs', value: 'list_jobs' }
    ]}
>
<TabItem value="get_job">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The ARN for the job.</td>
</tr>
<tr>
    <td><CopyableCode code="asset_configuration" /></td>
    <td><code>object</code></td>
    <td>The configuration for the asset, including tags applied to assets created by the job.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the job was created, in ISO 8601 format.</td>
</tr>
<tr>
    <td><CopyableCode code="details" /></td>
    <td><code>object</code></td>
    <td>Details about the job.</td>
</tr>
<tr>
    <td><CopyableCode code="errors" /></td>
    <td><code>array</code></td>
    <td>The errors associated with jobs.</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the job. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#123;30,40&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the job. (WAITING, IN_PROGRESS, ERROR, COMPLETED, CANCELLED, TIMED_OUT)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The job type. (IMPORT_ASSETS_FROM_S3, IMPORT_ASSET_FROM_SIGNED_URL, EXPORT_ASSETS_TO_S3, EXPORT_ASSET_TO_SIGNED_URL, EXPORT_REVISIONS_TO_S3, IMPORT_ASSETS_FROM_REDSHIFT_DATA_SHARES, IMPORT_ASSET_FROM_API_GATEWAY_API, CREATE_S3_DATA_ACCESS_FROM_S3_BUCKET, IMPORT_ASSETS_FROM_LAKE_FORMATION_TAG_POLICY)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the job was last updated, in ISO 8601 format.</td>
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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The ARN for the job.</td>
</tr>
<tr>
    <td><CopyableCode code="asset_configuration" /></td>
    <td><code>object</code></td>
    <td>The configuration for the asset, which can include tags.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the job was created, in ISO 8601 format.</td>
</tr>
<tr>
    <td><CopyableCode code="details" /></td>
    <td><code>object</code></td>
    <td>Details of the operation to be performed by the job, such as export destination details or import source details.</td>
</tr>
<tr>
    <td><CopyableCode code="errors" /></td>
    <td><code>array</code></td>
    <td>Errors for jobs.</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the job. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#123;30,40&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the job. (WAITING, IN_PROGRESS, ERROR, COMPLETED, CANCELLED, TIMED_OUT)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The job type. (IMPORT_ASSETS_FROM_S3, IMPORT_ASSET_FROM_SIGNED_URL, EXPORT_ASSETS_TO_S3, EXPORT_ASSET_TO_SIGNED_URL, EXPORT_REVISIONS_TO_S3, IMPORT_ASSETS_FROM_REDSHIFT_DATA_SHARES, IMPORT_ASSET_FROM_API_GATEWAY_API, CREATE_S3_DATA_ACCESS_FROM_S3_BUCKET, IMPORT_ASSETS_FROM_LAKE_FORMATION_TAG_POLICY)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the job was last updated, in ISO 8601 format.</td>
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
    <td><a href="#get_job"><CopyableCode code="get_job" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-job_id"><code>job_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This operation returns information about a job.</td>
</tr>
<tr>
    <td><a href="#list_jobs"><CopyableCode code="list_jobs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-dataSetId"><code>dataSetId</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-revisionId"><code>revisionId</code></a></td>
    <td>This operation lists your jobs sorted by CreatedAt in descending order.</td>
</tr>
<tr>
    <td><a href="#create_job"><CopyableCode code="create_job" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This operation creates a job.</td>
</tr>
<tr>
    <td><a href="#cancel_job"><CopyableCode code="cancel_job" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-job_id"><code>job_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This operation cancels a job. Jobs can be cancelled only when they are in the WAITING state.</td>
</tr>
<tr>
    <td><a href="#start_job"><CopyableCode code="start_job" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-job_id"><code>job_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This operation starts a job.</td>
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
<tr id="parameter-job_id">
    <td><CopyableCode code="job_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for a job.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-dataSetId">
    <td><CopyableCode code="dataSetId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for a data set.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results returned by a single call.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token value retrieved from a previous call to access the next page of results.</td>
</tr>
<tr id="parameter-revisionId">
    <td><CopyableCode code="revisionId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for a revision.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_job"
    values={[
        { label: 'get_job', value: 'get_job' },
        { label: 'list_jobs', value: 'list_jobs' }
    ]}
>
<TabItem value="get_job">

This operation returns information about a job.

```sql
SELECT
arn,
asset_configuration,
created_at,
details,
errors,
id,
state,
type,
updated_at
FROM aws.dataexchange.jobs
WHERE job_id = '{{ job_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_jobs">

This operation lists your jobs sorted by CreatedAt in descending order.

```sql
SELECT
arn,
asset_configuration,
created_at,
details,
errors,
id,
state,
type,
updated_at
FROM aws.dataexchange.jobs
WHERE region = '{{ region }}' -- required
AND dataSetId = '{{ dataSetId }}'
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
AND revisionId = '{{ revisionId }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_job"
    values={[
        { label: 'create_job', value: 'create_job' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_job">

This operation creates a job.

```sql
INSERT INTO aws.dataexchange.jobs (
AssetConfiguration,
Details,
Type,
region
)
SELECT 
'{{ AssetConfiguration }}',
'{{ Details }}',
'{{ Type }}',
'{{ region }}'
RETURNING
arn,
asset_configuration,
created_at,
details,
errors,
id,
state,
type,
updated_at
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
    - name: AssetConfiguration
      description: |
        The configuration for the asset, which can include tags.
      value:
        Tags:
          - Key: "{{ Key }}"
            Value: "{{ Value }}"
    - name: Details
      description: |
        The details for the request.
      value:
        ExportAssetToSignedUrl:
          AssetId: "{{ AssetId }}"
          DataSetId: "{{ DataSetId }}"
          RevisionId: "{{ RevisionId }}"
        ExportAssetsToS3:
          AssetDestinations:
            - AssetId: "{{ AssetId }}"
              Bucket: "{{ Bucket }}"
              Key: "{{ Key }}"
          DataSetId: "{{ DataSetId }}"
          Encryption:
            KmsKeyArn: "{{ KmsKeyArn }}"
            Type: "{{ Type }}"
          RevisionId: "{{ RevisionId }}"
        ExportRevisionsToS3:
          DataSetId: "{{ DataSetId }}"
          Encryption:
            KmsKeyArn: "{{ KmsKeyArn }}"
            Type: "{{ Type }}"
          RevisionDestinations:
            - Bucket: "{{ Bucket }}"
              KeyPattern: "{{ KeyPattern }}"
              RevisionId: "{{ RevisionId }}"
        ImportAssetFromSignedUrl:
          AssetName: "{{ AssetName }}"
          DataSetId: "{{ DataSetId }}"
          Md5Hash: "{{ Md5Hash }}"
          RevisionId: "{{ RevisionId }}"
        ImportAssetsFromS3:
          AssetSources:
            - Bucket: "{{ Bucket }}"
              Key: "{{ Key }}"
          DataSetId: "{{ DataSetId }}"
          RevisionId: "{{ RevisionId }}"
        ImportAssetsFromRedshiftDataShares:
          AssetSources:
            - DataShareArn: "{{ DataShareArn }}"
          DataSetId: "{{ DataSetId }}"
          RevisionId: "{{ RevisionId }}"
        ImportAssetFromApiGatewayApi:
          ApiDescription: "{{ ApiDescription }}"
          ApiId: "{{ ApiId }}"
          ApiKey: "{{ ApiKey }}"
          ApiName: "{{ ApiName }}"
          ApiSpecificationMd5Hash: "{{ ApiSpecificationMd5Hash }}"
          DataSetId: "{{ DataSetId }}"
          ProtocolType: "{{ ProtocolType }}"
          RevisionId: "{{ RevisionId }}"
          Stage: "{{ Stage }}"
        CreateS3DataAccessFromS3Bucket:
          AssetSource:
            Bucket: "{{ Bucket }}"
            KeyPrefixes:
              - "{{ KeyPrefixes }}"
            Keys:
              - "{{ Keys }}"
            KmsKeysToGrant:
              - KmsKeyArn: "{{ KmsKeyArn }}"
          DataSetId: "{{ DataSetId }}"
          RevisionId: "{{ RevisionId }}"
        ImportAssetsFromLakeFormationTagPolicy:
          CatalogId: "{{ CatalogId }}"
          Database:
            Expression:
              - TagKey: "{{ TagKey }}"
                TagValues: "{{ TagValues }}"
            Permissions:
              - "{{ Permissions }}"
          Table:
            Expression:
              - TagKey: "{{ TagKey }}"
                TagValues: "{{ TagValues }}"
            Permissions:
              - "{{ Permissions }}"
          RoleArn: "{{ RoleArn }}"
          DataSetId: "{{ DataSetId }}"
          RevisionId: "{{ RevisionId }}"
    - name: Type
      value: "{{ Type }}"
      valid_values: ['IMPORT_ASSETS_FROM_S3', 'IMPORT_ASSET_FROM_SIGNED_URL', 'EXPORT_ASSETS_TO_S3', 'EXPORT_ASSET_TO_SIGNED_URL', 'EXPORT_REVISIONS_TO_S3', 'IMPORT_ASSETS_FROM_REDSHIFT_DATA_SHARES', 'IMPORT_ASSET_FROM_API_GATEWAY_API', 'CREATE_S3_DATA_ACCESS_FROM_S3_BUCKET', 'IMPORT_ASSETS_FROM_LAKE_FORMATION_TAG_POLICY']
`}</CodeBlock>

</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="cancel_job"
    values={[
        { label: 'cancel_job', value: 'cancel_job' },
        { label: 'start_job', value: 'start_job' }
    ]}
>
<TabItem value="cancel_job">

This operation cancels a job. Jobs can be cancelled only when they are in the WAITING state.

```sql
EXEC aws.dataexchange.jobs.cancel_job 
@job_id='{{ job_id }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
<TabItem value="start_job">

This operation starts a job.

```sql
EXEC aws.dataexchange.jobs.start_job 
@job_id='{{ job_id }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
