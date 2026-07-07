--- 
title: job_documents
hide_title: false
hide_table_of_contents: false
keywords:
  - job_documents
  - iot
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

Creates, updates, deletes, gets or lists a <code>job_documents</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="job_documents" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iot.job_documents" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_job_document"
    values={[
        { label: 'get_job_document', value: 'get_job_document' }
    ]}
>
<TabItem value="get_job_document">

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
    <td><CopyableCode code="document" /></td>
    <td><code>string</code></td>
    <td>The job document content.</td>
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
    <td><a href="#get_job_document"><CopyableCode code="get_job_document" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-job_id"><code>job_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-beforeSubstitution"><code>beforeSubstitution</code></a></td>
    <td>Gets a job document. Requires permission to access the GetJobDocument action.</td>
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
    <td>The unique identifier you assigned to this job when it was created.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-beforeSubstitution">
    <td><CopyableCode code="beforeSubstitution" /></td>
    <td><code>boolean</code></td>
    <td>Provides a view of the job document before and after the substitution parameters have been resolved with their exact values.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_job_document"
    values={[
        { label: 'get_job_document', value: 'get_job_document' }
    ]}
>
<TabItem value="get_job_document">

Gets a job document. Requires permission to access the GetJobDocument action.

```sql
SELECT
document
FROM aws.iot.job_documents
WHERE job_id = '{{ job_id }}' -- required
AND region = '{{ region }}' -- required
AND beforeSubstitution = '{{ beforeSubstitution }}'
;
```
</TabItem>
</Tabs>
