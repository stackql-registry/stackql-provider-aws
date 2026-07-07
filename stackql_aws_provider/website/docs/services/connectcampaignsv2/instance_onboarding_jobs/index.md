--- 
title: instance_onboarding_jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - instance_onboarding_jobs
  - connectcampaignsv2
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

Creates, updates, deletes, gets or lists an <code>instance_onboarding_jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="instance_onboarding_jobs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.connectcampaignsv2.instance_onboarding_jobs" /></td></tr>
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
    <td><a href="#delete_instance_onboarding_job"><CopyableCode code="delete_instance_onboarding_job" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-connect_instance_id"><code>connect_instance_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Delete the Connect Campaigns onboarding job for the specified Amazon Connect instance.</td>
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
<tr id="parameter-connect_instance_id">
    <td><CopyableCode code="connect_instance_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `DELETE` examples

<Tabs
    defaultValue="delete_instance_onboarding_job"
    values={[
        { label: 'delete_instance_onboarding_job', value: 'delete_instance_onboarding_job' }
    ]}
>
<TabItem value="delete_instance_onboarding_job">

Delete the Connect Campaigns onboarding job for the specified Amazon Connect instance.

```sql
DELETE FROM aws.connectcampaignsv2.instance_onboarding_jobs
WHERE connect_instance_id = '{{ connect_instance_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
