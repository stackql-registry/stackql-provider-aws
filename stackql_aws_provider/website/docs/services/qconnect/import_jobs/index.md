--- 
title: import_jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - import_jobs
  - qconnect
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

Creates, updates, deletes, gets or lists an <code>import_jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="import_jobs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.qconnect.import_jobs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_import_job"
    values={[
        { label: 'get_import_job', value: 'get_import_job' },
        { label: 'list_import_jobs', value: 'list_import_jobs' }
    ]}
>
<TabItem value="get_import_job">

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
    <td><CopyableCode code="createdTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the import job was created.</td>
</tr>
<tr>
    <td><CopyableCode code="externalSourceConfiguration" /></td>
    <td><code>object</code></td>
    <td>The configuration information of the external data source.</td>
</tr>
<tr>
    <td><CopyableCode code="failedRecordReport" /></td>
    <td><code>string</code></td>
    <td>The link to download the information of resource data that failed to be imported.</td>
</tr>
<tr>
    <td><CopyableCode code="importJobId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the import job. (pattern: &lt;code&gt;&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="importJobType" /></td>
    <td><code>string</code></td>
    <td>The type of the import job. (QUICK_RESPONSES)</td>
</tr>
<tr>
    <td><CopyableCode code="knowledgeBaseArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the knowledge base. (pattern: &lt;code&gt;arn:&#91;a-z-&#93;*?:wisdom:&#91;a-z0-9-&#93;*?:&#91;0-9&#93;&#123;12&#125;:&#91;a-z-&#93;*?/&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;(?:/&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;)&#123;0,2&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="knowledgeBaseId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the knowledge base. (pattern: &lt;code&gt;&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="lastModifiedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the import job data was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>The metadata fields of the imported Amazon Q in Connect resources.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the import job. (START_IN_PROGRESS, FAILED, COMPLETE, DELETE_IN_PROGRESS, DELETE_FAILED, DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="uploadId" /></td>
    <td><code>string</code></td>
    <td>A pointer to the uploaded asset. This value is returned by StartContentUpload.</td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string</code></td>
    <td>The download link to the resource file that is uploaded to the import job.</td>
</tr>
<tr>
    <td><CopyableCode code="urlExpiry" /></td>
    <td><code>string (date-time)</code></td>
    <td>The expiration time of the URL as an epoch timestamp.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_import_jobs">

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
    <td><CopyableCode code="createdTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the import job was created.</td>
</tr>
<tr>
    <td><CopyableCode code="externalSourceConfiguration" /></td>
    <td><code>object</code></td>
    <td>The configuration information of the external data source.</td>
</tr>
<tr>
    <td><CopyableCode code="importJobId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the import job. (pattern: &lt;code&gt;&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="importJobType" /></td>
    <td><code>string</code></td>
    <td>The type of import job. (QUICK_RESPONSES)</td>
</tr>
<tr>
    <td><CopyableCode code="knowledgeBaseArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the knowledge base. (pattern: &lt;code&gt;arn:&#91;a-z-&#93;*?:wisdom:&#91;a-z0-9-&#93;*?:&#91;0-9&#93;&#123;12&#125;:&#91;a-z-&#93;*?/&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;(?:/&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;)&#123;0,2&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="knowledgeBaseId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the knowledge base. (pattern: &lt;code&gt;&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="lastModifiedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the import job was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>The metadata fields of the imported Amazon Q in Connect resources.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the import job. (START_IN_PROGRESS, FAILED, COMPLETE, DELETE_IN_PROGRESS, DELETE_FAILED, DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="uploadId" /></td>
    <td><code>string</code></td>
    <td>A pointer to the uploaded asset. This value is returned by StartContentUpload.</td>
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
    <td><a href="#get_import_job"><CopyableCode code="get_import_job" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-import_job_id"><code>import_job_id</code></a>, <a href="#parameter-knowledge_base_id"><code>knowledge_base_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the started import job.</td>
</tr>
<tr>
    <td><a href="#list_import_jobs"><CopyableCode code="list_import_jobs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-knowledge_base_id"><code>knowledge_base_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists information about import jobs.</td>
</tr>
<tr>
    <td><a href="#delete_import_job"><CopyableCode code="delete_import_job" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-knowledge_base_id"><code>knowledge_base_id</code></a>, <a href="#parameter-import_job_id"><code>import_job_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the quick response import job.</td>
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
<tr id="parameter-import_job_id">
    <td><CopyableCode code="import_job_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the import job to be deleted.</td>
</tr>
<tr id="parameter-knowledge_base_id">
    <td><CopyableCode code="knowledge_base_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the knowledge base.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return per page.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_import_job"
    values={[
        { label: 'get_import_job', value: 'get_import_job' },
        { label: 'list_import_jobs', value: 'list_import_jobs' }
    ]}
>
<TabItem value="get_import_job">

Retrieves the started import job.

```sql
SELECT
createdTime,
externalSourceConfiguration,
failedRecordReport,
importJobId,
importJobType,
knowledgeBaseArn,
knowledgeBaseId,
lastModifiedTime,
metadata,
status,
uploadId,
url,
urlExpiry
FROM aws.qconnect.import_jobs
WHERE import_job_id = '{{ import_job_id }}' -- required
AND knowledge_base_id = '{{ knowledge_base_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_import_jobs">

Lists information about import jobs.

```sql
SELECT
createdTime,
externalSourceConfiguration,
importJobId,
importJobType,
knowledgeBaseArn,
knowledgeBaseId,
lastModifiedTime,
metadata,
status,
uploadId
FROM aws.qconnect.import_jobs
WHERE knowledge_base_id = '{{ knowledge_base_id }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_import_job"
    values={[
        { label: 'delete_import_job', value: 'delete_import_job' }
    ]}
>
<TabItem value="delete_import_job">

Deletes the quick response import job.

```sql
DELETE FROM aws.qconnect.import_jobs
WHERE knowledge_base_id = '{{ knowledge_base_id }}' --required
AND import_job_id = '{{ import_job_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
