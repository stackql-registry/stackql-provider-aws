--- 
title: dry_run_progress
hide_title: false
hide_table_of_contents: false
keywords:
  - dry_run_progress
  - opensearch
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

Creates, updates, deletes, gets or lists a <code>dry_run_progress</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="dry_run_progress" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.opensearch.dry_run_progress" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_dry_run_progress"
    values={[
        { label: 'describe_dry_run_progress', value: 'describe_dry_run_progress' }
    ]}
>
<TabItem value="describe_dry_run_progress">

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
    <td><CopyableCode code="dry_run_config" /></td>
    <td><code>object</code></td>
    <td>The current status of an OpenSearch Service domain.</td>
</tr>
<tr>
    <td><CopyableCode code="dry_run_progress_status" /></td>
    <td><code>object</code></td>
    <td>The current status of the dry run, including any validation errors.</td>
</tr>
<tr>
    <td><CopyableCode code="dry_run_results" /></td>
    <td><code>object</code></td>
    <td>The results of the dry run.</td>
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
    <td><a href="#describe_dry_run_progress"><CopyableCode code="describe_dry_run_progress" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-dryRunId"><code>dryRunId</code></a>, <a href="#parameter-loadDryRunConfig"><code>loadDryRunConfig</code></a></td>
    <td>Describes the progress of a pre-update dry run analysis on an Amazon OpenSearch Service domain. For more information, see Determining whether a change will cause a blue/green deployment.</td>
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
<tr id="parameter-domain_name">
    <td><CopyableCode code="domain_name" /></td>
    <td><code>string</code></td>
    <td>The name of the domain.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-dryRunId">
    <td><CopyableCode code="dryRunId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the dry run.</td>
</tr>
<tr id="parameter-loadDryRunConfig">
    <td><CopyableCode code="loadDryRunConfig" /></td>
    <td><code>boolean</code></td>
    <td>Whether to include the configuration of the dry run in the response. The configuration specifies the updates that you're planning to make on the domain.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_dry_run_progress"
    values={[
        { label: 'describe_dry_run_progress', value: 'describe_dry_run_progress' }
    ]}
>
<TabItem value="describe_dry_run_progress">

Describes the progress of a pre-update dry run analysis on an Amazon OpenSearch Service domain. For more information, see Determining whether a change will cause a blue/green deployment.

```sql
SELECT
dry_run_config,
dry_run_progress_status,
dry_run_results
FROM aws.opensearch.dry_run_progress
WHERE domain_name = '{{ domain_name }}' -- required
AND region = '{{ region }}' -- required
AND dryRunId = '{{ dryRunId }}'
AND loadDryRunConfig = '{{ loadDryRunConfig }}'
;
```
</TabItem>
</Tabs>
