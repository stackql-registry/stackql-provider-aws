--- 
title: spot_datafeed_subscriptions
hide_title: false
hide_table_of_contents: false
keywords:
  - spot_datafeed_subscriptions
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

Creates, updates, deletes, gets or lists a <code>spot_datafeed_subscriptions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="spot_datafeed_subscriptions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.spot_datafeed_subscriptions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_spot_datafeed_subscription"
    values={[
        { label: 'describe_spot_datafeed_subscription', value: 'describe_spot_datafeed_subscription' }
    ]}
>
<TabItem value="describe_spot_datafeed_subscription">

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
    <td><CopyableCode code="bucket" /></td>
    <td><code>string</code></td>
    <td>The name of the Amazon S3 bucket where the Spot Instance data feed is located.</td>
</tr>
<tr>
    <td><CopyableCode code="fault" /></td>
    <td><code>string</code></td>
    <td>The fault codes for the Spot Instance request, if any.</td>
</tr>
<tr>
    <td><CopyableCode code="owner_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID of the account.</td>
</tr>
<tr>
    <td><CopyableCode code="prefix" /></td>
    <td><code>string</code></td>
    <td>The prefix for the data feed files.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the Spot Instance data feed subscription.</td>
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
    <td><a href="#describe_spot_datafeed_subscription"><CopyableCode code="describe_spot_datafeed_subscription" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Describes the data feed for Spot Instances. For more information, see Spot Instance data feed in the Amazon EC2 User Guide.</td>
</tr>
<tr>
    <td><a href="#create_spot_datafeed_subscription"><CopyableCode code="create_spot_datafeed_subscription" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-Bucket"><code>Bucket</code></a>, <a href="#parameter-Prefix"><code>Prefix</code></a></td>
    <td>Creates a data feed for Spot Instances, enabling you to view Spot Instance usage logs. You can create one data feed per Amazon Web Services account. For more information, see Spot Instance data feed in the Amazon EC2 User Guide.</td>
</tr>
<tr>
    <td><a href="#delete_spot_datafeed_subscription"><CopyableCode code="delete_spot_datafeed_subscription" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Deletes the data feed for Spot Instances.</td>
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
<tr id="parameter-Bucket">
    <td><CopyableCode code="Bucket" /></td>
    <td><code>string</code></td>
    <td>The name of the Amazon S3 bucket in which to store the Spot Instance data feed. For more information about bucket names, see Bucket naming rules in the Amazon S3 User Guide.</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-Prefix">
    <td><CopyableCode code="Prefix" /></td>
    <td><code>string</code></td>
    <td>The prefix for the data feed file names.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_spot_datafeed_subscription"
    values={[
        { label: 'describe_spot_datafeed_subscription', value: 'describe_spot_datafeed_subscription' }
    ]}
>
<TabItem value="describe_spot_datafeed_subscription">

Describes the data feed for Spot Instances. For more information, see Spot Instance data feed in the Amazon EC2 User Guide.

```sql
SELECT
bucket,
fault,
owner_id,
prefix,
state
FROM aws.ec2.spot_datafeed_subscriptions
WHERE region = '{{ region }}' -- required
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_spot_datafeed_subscription"
    values={[
        { label: 'create_spot_datafeed_subscription', value: 'create_spot_datafeed_subscription' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_spot_datafeed_subscription">

Creates a data feed for Spot Instances, enabling you to view Spot Instance usage logs. You can create one data feed per Amazon Web Services account. For more information, see Spot Instance data feed in the Amazon EC2 User Guide.

```sql
INSERT INTO aws.ec2.spot_datafeed_subscriptions (
region,
DryRun,
Bucket,
Prefix
)
SELECT 
'{{ region }}',
'{{ DryRun }}',
'{{ Bucket }}',
'{{ Prefix }}'
RETURNING
bucket,
fault,
owner_id,
prefix,
state
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: spot_datafeed_subscriptions
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the spot_datafeed_subscriptions resource.
    - name: DryRun
      value: {{ DryRun }}
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
    - name: Bucket
      value: "{{ Bucket }}"
      description: The name of the Amazon S3 bucket in which to store the Spot Instance data feed. For more information about bucket names, see Bucket naming rules in the Amazon S3 User Guide.
      description: The name of the Amazon S3 bucket in which to store the Spot Instance data feed. For more information about bucket names, see Bucket naming rules in the Amazon S3 User Guide.
    - name: Prefix
      value: "{{ Prefix }}"
      description: The prefix for the data feed file names.
      description: The prefix for the data feed file names.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_spot_datafeed_subscription"
    values={[
        { label: 'delete_spot_datafeed_subscription', value: 'delete_spot_datafeed_subscription' }
    ]}
>
<TabItem value="delete_spot_datafeed_subscription">

Deletes the data feed for Spot Instances.

```sql
DELETE FROM aws.ec2.spot_datafeed_subscriptions
WHERE region = '{{ region }}' --required
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>
