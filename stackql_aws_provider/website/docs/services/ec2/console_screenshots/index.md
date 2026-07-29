--- 
title: console_screenshots
hide_title: false
hide_table_of_contents: false
keywords:
  - console_screenshots
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

Creates, updates, deletes, gets or lists a <code>console_screenshots</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="console_screenshots" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.console_screenshots" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_console_screenshot"
    values={[
        { label: 'get_console_screenshot', value: 'get_console_screenshot' }
    ]}
>
<TabItem value="get_console_screenshot">

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
    <td><CopyableCode code="image_data" /></td>
    <td><code>string</code></td>
    <td>The data that comprises the image.</td>
</tr>
<tr>
    <td><CopyableCode code="instance_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the instance.</td>
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
    <td><a href="#get_console_screenshot"><CopyableCode code="get_console_screenshot" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-InstanceId"><code>InstanceId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-WakeUp"><code>WakeUp</code></a></td>
    <td>Retrieve a JPG-format screenshot of a running instance to help with troubleshooting. The returned content is Base64-encoded. For more information, see Instance console output in the Amazon EC2 User Guide.</td>
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
<tr id="parameter-InstanceId">
    <td><CopyableCode code="InstanceId" /></td>
    <td><code>string</code></td>
    <td>The ID of the instance.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the operation, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-WakeUp">
    <td><CopyableCode code="WakeUp" /></td>
    <td><code>boolean</code></td>
    <td>When set to true, acts as keystroke input and wakes up an instance that's in standby or "sleep" mode.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_console_screenshot"
    values={[
        { label: 'get_console_screenshot', value: 'get_console_screenshot' }
    ]}
>
<TabItem value="get_console_screenshot">

Retrieve a JPG-format screenshot of a running instance to help with troubleshooting. The returned content is Base64-encoded. For more information, see Instance console output in the Amazon EC2 User Guide.

```sql
SELECT
image_data,
instance_id
FROM aws.ec2.console_screenshots
WHERE InstanceId = '{{ InstanceId }}' -- required
AND region = '{{ region }}' -- required
AND DryRun = '{{ DryRun }}'
AND WakeUp = '{{ WakeUp }}'
;
```
</TabItem>
</Tabs>
