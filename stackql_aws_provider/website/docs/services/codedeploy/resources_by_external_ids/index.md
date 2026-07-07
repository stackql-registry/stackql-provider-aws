--- 
title: resources_by_external_ids
hide_title: false
hide_table_of_contents: false
keywords:
  - resources_by_external_ids
  - codedeploy
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

Creates, updates, deletes, gets or lists a <code>resources_by_external_ids</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="resources_by_external_ids" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.codedeploy.resources_by_external_ids" /></td></tr>
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
    <td><a href="#delete_resources_by_external_id"><CopyableCode code="delete_resources_by_external_id" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes resources linked to an external ID. This action only applies if you have configured blue/green deployments through CloudFormation. It is not necessary to call this action directly. CloudFormation calls it on your behalf when it needs to delete stack resources. This action is offered publicly in case you need to delete resources to comply with General Data Protection Regulation (GDPR) requirements.</td>
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

## `DELETE` examples

<Tabs
    defaultValue="delete_resources_by_external_id"
    values={[
        { label: 'delete_resources_by_external_id', value: 'delete_resources_by_external_id' }
    ]}
>
<TabItem value="delete_resources_by_external_id">

Deletes resources linked to an external ID. This action only applies if you have configured blue/green deployments through CloudFormation. It is not necessary to call this action directly. CloudFormation calls it on your behalf when it needs to delete stack resources. This action is offered publicly in case you need to delete resources to comply with General Data Protection Regulation (GDPR) requirements.

```sql
DELETE FROM aws.codedeploy.resources_by_external_ids
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
