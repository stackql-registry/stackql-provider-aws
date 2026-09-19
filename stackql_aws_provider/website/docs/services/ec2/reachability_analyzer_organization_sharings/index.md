--- 
title: reachability_analyzer_organization_sharings
hide_title: false
hide_table_of_contents: false
keywords:
  - reachability_analyzer_organization_sharings
  - ec2
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

Creates, updates, deletes, gets or lists a <code>reachability_analyzer_organization_sharings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="reachability_analyzer_organization_sharings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.reachability_analyzer_organization_sharings" /></td></tr>
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
    <td><a href="#enable_reachability_analyzer_organization_sharing"><CopyableCode code="enable_reachability_analyzer_organization_sharing" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Establishes a trust relationship between Reachability Analyzer and Organizations. This operation must be performed by the management account for the organization. After you establish a trust relationship, a user in the management account or a delegated administrator account can run a cross-account analysis using resources from the member accounts.</td>
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
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="enable_reachability_analyzer_organization_sharing"
    values={[
        { label: 'enable_reachability_analyzer_organization_sharing', value: 'enable_reachability_analyzer_organization_sharing' }
    ]}
>
<TabItem value="enable_reachability_analyzer_organization_sharing">

Establishes a trust relationship between Reachability Analyzer and Organizations. This operation must be performed by the management account for the organization. After you establish a trust relationship, a user in the management account or a delegated administrator account can run a cross-account analysis using resources from the member accounts.

```sql
EXEC aws.ec2.reachability_analyzer_organization_sharings.enable_reachability_analyzer_organization_sharing 
@region='{{ region }}' --required, 
@DryRun={{ DryRun }}
;
```
</TabItem>
</Tabs>
