--- 
title: import_file_enrichments
hide_title: false
hide_table_of_contents: false
keywords:
  - import_file_enrichments
  - mgn
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

Creates, updates, deletes, gets or lists an <code>import_file_enrichments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="import_file_enrichments" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.mgn.import_file_enrichments" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_import_file_enrichments"
    values={[
        { label: 'list_import_file_enrichments', value: 'list_import_file_enrichments' }
    ]}
>
<TabItem value="list_import_file_enrichments">

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
    <td><CopyableCode code="checksum" /></td>
    <td><code>object</code></td>
    <td>The checksum of the enriched file for integrity verification.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the enrichment job was created.</td>
</tr>
<tr>
    <td><CopyableCode code="ended_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the enrichment job completed or failed.</td>
</tr>
<tr>
    <td><CopyableCode code="job_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the import file enrichment job. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="s_3_bucket_target" /></td>
    <td><code>object</code></td>
    <td>The target S3 configuration for the enriched import file.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the import file enrichment job. (PENDING, STARTED, FAILED, SUCCEEDED, SUCCEEDED_WITH_WARNINGS)</td>
</tr>
<tr>
    <td><CopyableCode code="status_details" /></td>
    <td><code>string</code></td>
    <td>Detailed status information about the enrichment job.</td>
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
    <td><a href="#list_import_file_enrichments"><CopyableCode code="list_import_file_enrichments" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists import file enrichment jobs with optional filtering by job IDs.</td>
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
    defaultValue="list_import_file_enrichments"
    values={[
        { label: 'list_import_file_enrichments', value: 'list_import_file_enrichments' }
    ]}
>
<TabItem value="list_import_file_enrichments">

Lists import file enrichment jobs with optional filtering by job IDs.

```sql
SELECT
checksum,
created_at,
ended_at,
job_id,
s_3_bucket_target,
status,
status_details
FROM aws.mgn.import_file_enrichments
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
