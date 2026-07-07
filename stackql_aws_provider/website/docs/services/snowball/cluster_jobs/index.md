--- 
title: cluster_jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - cluster_jobs
  - snowball
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

Creates, updates, deletes, gets or lists a <code>cluster_jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="cluster_jobs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.snowball.cluster_jobs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_cluster_jobs"
    values={[
        { label: 'list_cluster_jobs', value: 'list_cluster_jobs' }
    ]}
>
<TabItem value="list_cluster_jobs">

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
    <td><CopyableCode code="CreationDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The creation date for this job.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The optional description of this specific job, for example Important Photos 2016-08-11. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="IsMaster" /></td>
    <td><code>boolean</code></td>
    <td>A value that indicates that this job is a main job. A main job represents a successful request to create an export job. Main jobs aren't associated with any Snowballs. Instead, each main job will have at least one job part, and each job part is associated with a Snowball. It might take some time before the job parts associated with a particular main job are listed, because they are created after the main job is created.</td>
</tr>
<tr>
    <td><CopyableCode code="JobId" /></td>
    <td><code>string</code></td>
    <td>The automatically generated ID for a job, for example JID123e4567-e89b-12d3-a456-426655440000. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="JobState" /></td>
    <td><code>string</code></td>
    <td>The current state of this job. (New, PreparingAppliance, PreparingShipment, InTransitToCustomer, WithCustomer, InTransitToAWS, WithAWSSortingFacility, WithAWS, InProgress, Complete, Cancelled, Listing, Pending)</td>
</tr>
<tr>
    <td><CopyableCode code="JobType" /></td>
    <td><code>string</code></td>
    <td>The type of job. (IMPORT, EXPORT, LOCAL_USE)</td>
</tr>
<tr>
    <td><CopyableCode code="SnowballType" /></td>
    <td><code>string</code></td>
    <td>The type of device used with this job. (STANDARD, EDGE, EDGE_C, EDGE_CG, EDGE_S, SNC1_HDD, SNC1_SSD, V3_5C, V3_5S, RACK_5U_C)</td>
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
    <td><a href="#list_cluster_jobs"><CopyableCode code="list_cluster_jobs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns an array of JobListEntry objects of the specified length. Each JobListEntry object is for a job in the specified cluster and contains a job's state, a job's ID, and other information.</td>
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
    defaultValue="list_cluster_jobs"
    values={[
        { label: 'list_cluster_jobs', value: 'list_cluster_jobs' }
    ]}
>
<TabItem value="list_cluster_jobs">

Returns an array of JobListEntry objects of the specified length. Each JobListEntry object is for a job in the specified cluster and contains a job's state, a job's ID, and other information.

```sql
SELECT
CreationDate,
Description,
IsMaster,
JobId,
JobState,
JobType,
SnowballType
FROM aws.snowball.cluster_jobs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
