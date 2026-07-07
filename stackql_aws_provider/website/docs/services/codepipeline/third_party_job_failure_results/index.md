--- 
title: third_party_job_failure_results
hide_title: false
hide_table_of_contents: false
keywords:
  - third_party_job_failure_results
  - codepipeline
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

Creates, updates, deletes, gets or lists a <code>third_party_job_failure_results</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="third_party_job_failure_results" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.codepipeline.third_party_job_failure_results" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#put_third_party_job_failure_result"><CopyableCode code="put_third_party_job_failure_result" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-jobId"><code>jobId</code></a>, <a href="#parameter-clientToken"><code>clientToken</code></a>, <a href="#parameter-failureDetails"><code>failureDetails</code></a></td>
    <td></td>
    <td>Represents the failure of a third party job as returned to the pipeline by a job worker. Used for partner actions only.</td>
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

## `REPLACE` examples

<Tabs
    defaultValue="put_third_party_job_failure_result"
    values={[
        { label: 'put_third_party_job_failure_result', value: 'put_third_party_job_failure_result' }
    ]}
>
<TabItem value="put_third_party_job_failure_result">

Represents the failure of a third party job as returned to the pipeline by a job worker. Used for partner actions only.

```sql
REPLACE aws.codepipeline.third_party_job_failure_results
SET 
jobId = '{{ jobId }}',
clientToken = '{{ clientToken }}',
failureDetails = '{{ failureDetails }}'
WHERE 
region = '{{ region }}' --required
AND jobId = '{{ jobId }}' --required
AND clientToken = '{{ clientToken }}' --required
AND failureDetails = '{{ failureDetails }}' --required;
```
</TabItem>
</Tabs>
