--- 
title: instance_onboarding_job_status
hide_title: false
hide_table_of_contents: false
keywords:
  - instance_onboarding_job_status
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

Creates, updates, deletes, gets or lists an <code>instance_onboarding_job_status</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="instance_onboarding_job_status" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.connectcampaignsv2.instance_onboarding_job_status" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_instance_onboarding_job_status"
    values={[
        { label: 'get_instance_onboarding_job_status', value: 'get_instance_onboarding_job_status' }
    ]}
>
<TabItem value="get_instance_onboarding_job_status">

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
    <td><CopyableCode code="connectInstanceId" /></td>
    <td><code>string</code></td>
    <td>Amazon Connect Instance Id (pattern: &lt;code&gt;&#91;-_.a-zA-Z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="failureCode" /></td>
    <td><code>string</code></td>
    <td>Enumeration of the possible failure codes for instance onboarding job (EVENT_BRIDGE_ACCESS_DENIED, EVENT_BRIDGE_MANAGED_RULE_LIMIT_EXCEEDED, IAM_ACCESS_DENIED, KMS_ACCESS_DENIED, KMS_KEY_NOT_FOUND, INTERNAL_FAILURE)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Enumeration of the possible states for instance onboarding job (IN_PROGRESS, SUCCEEDED, FAILED)</td>
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
    <td><a href="#get_instance_onboarding_job_status"><CopyableCode code="get_instance_onboarding_job_status" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-connect_instance_id"><code>connect_instance_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get the specific instance onboarding job status.</td>
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

## `SELECT` examples

<Tabs
    defaultValue="get_instance_onboarding_job_status"
    values={[
        { label: 'get_instance_onboarding_job_status', value: 'get_instance_onboarding_job_status' }
    ]}
>
<TabItem value="get_instance_onboarding_job_status">

Get the specific instance onboarding job status.

```sql
SELECT
connectInstanceId,
failureCode,
status
FROM aws.connectcampaignsv2.instance_onboarding_job_status
WHERE connect_instance_id = '{{ connect_instance_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
