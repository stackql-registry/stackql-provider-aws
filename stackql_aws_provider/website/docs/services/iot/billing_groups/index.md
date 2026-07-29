--- 
title: billing_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - billing_groups
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

Creates, updates, deletes, gets or lists a <code>billing_groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="billing_groups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iot.billing_groups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_billing_group"
    values={[
        { label: 'describe_billing_group', value: 'describe_billing_group' },
        { label: 'list_billing_groups', value: 'list_billing_groups' }
    ]}
>
<TabItem value="describe_billing_group">

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
    <td><CopyableCode code="billing_group_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the billing group.</td>
</tr>
<tr>
    <td><CopyableCode code="billing_group_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the billing group. (pattern: &lt;code&gt;&#91;a-zA-Z0-9\-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="billing_group_metadata" /></td>
    <td><code>object</code></td>
    <td>Additional information about the billing group.</td>
</tr>
<tr>
    <td><CopyableCode code="billing_group_name" /></td>
    <td><code>string</code></td>
    <td>The name of the billing group. (pattern: &lt;code&gt;&#91;a-zA-Z0-9:_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="billing_group_properties" /></td>
    <td><code>object</code></td>
    <td>The properties of a billing group.</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>integer (int64)</code></td>
    <td>The version of the billing group.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_billing_groups">

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
    <td><CopyableCode code="group_arn" /></td>
    <td><code>string</code></td>
    <td>The group ARN.</td>
</tr>
<tr>
    <td><CopyableCode code="group_name" /></td>
    <td><code>string</code></td>
    <td>The group name. (pattern: &lt;code&gt;&#91;a-zA-Z0-9:_-&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#describe_billing_group"><CopyableCode code="describe_billing_group" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-billing_group_name"><code>billing_group_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about a billing group. Requires permission to access the DescribeBillingGroup action.</td>
</tr>
<tr>
    <td><a href="#list_billing_groups"><CopyableCode code="list_billing_groups" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-namePrefixFilter"><code>namePrefixFilter</code></a></td>
    <td>Lists the billing groups you have created. Requires permission to access the ListBillingGroups action.</td>
</tr>
<tr>
    <td><a href="#create_billing_group"><CopyableCode code="create_billing_group" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-billing_group_name"><code>billing_group_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a billing group. If this call is made multiple times using the same billing group name and configuration, the call will succeed. If this call is made with the same billing group name but different configuration a ResourceAlreadyExistsException is thrown. Requires permission to access the CreateBillingGroup action.</td>
</tr>
<tr>
    <td><a href="#update_billing_group"><CopyableCode code="update_billing_group" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-billing_group_name"><code>billing_group_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-billingGroupProperties"><code>billingGroupProperties</code></a></td>
    <td></td>
    <td>Updates information about the billing group. Requires permission to access the UpdateBillingGroup action.</td>
</tr>
<tr>
    <td><a href="#add_thing_to_billing_group"><CopyableCode code="add_thing_to_billing_group" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Adds a thing to a billing group. Requires permission to access the AddThingToBillingGroup action.</td>
</tr>
<tr>
    <td><a href="#delete_billing_group"><CopyableCode code="delete_billing_group" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-billing_group_name"><code>billing_group_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-expectedVersion"><code>expectedVersion</code></a></td>
    <td>Deletes the billing group. Requires permission to access the DeleteBillingGroup action.</td>
</tr>
<tr>
    <td><a href="#remove_thing_from_billing_group"><CopyableCode code="remove_thing_from_billing_group" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Removes the given thing from the billing group. Requires permission to access the RemoveThingFromBillingGroup action. This call is asynchronous. It might take several seconds for the detachment to propagate.</td>
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
<tr id="parameter-billing_group_name">
    <td><CopyableCode code="billing_group_name" /></td>
    <td><code>string</code></td>
    <td>The name of the billing group.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-expectedVersion">
    <td><CopyableCode code="expectedVersion" /></td>
    <td><code>integer (int64)</code></td>
    <td>The expected version of the billing group. If the version of the billing group does not match the expected version specified in the request, the DeleteBillingGroup request is rejected with a VersionConflictException.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return per request.</td>
</tr>
<tr id="parameter-namePrefixFilter">
    <td><CopyableCode code="namePrefixFilter" /></td>
    <td><code>string</code></td>
    <td>Limit the results to billing groups whose names have the given prefix.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>To retrieve the next set of results, the nextToken value from a previous response; otherwise null to receive the first set of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_billing_group"
    values={[
        { label: 'describe_billing_group', value: 'describe_billing_group' },
        { label: 'list_billing_groups', value: 'list_billing_groups' }
    ]}
>
<TabItem value="describe_billing_group">

Returns information about a billing group. Requires permission to access the DescribeBillingGroup action.

```sql
SELECT
billing_group_arn,
billing_group_id,
billing_group_metadata,
billing_group_name,
billing_group_properties,
version
FROM aws.iot.billing_groups
WHERE billing_group_name = '{{ billing_group_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_billing_groups">

Lists the billing groups you have created. Requires permission to access the ListBillingGroups action.

```sql
SELECT
group_arn,
group_name
FROM aws.iot.billing_groups
WHERE region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
AND namePrefixFilter = '{{ namePrefixFilter }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_billing_group"
    values={[
        { label: 'create_billing_group', value: 'create_billing_group' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_billing_group">

Creates a billing group. If this call is made multiple times using the same billing group name and configuration, the call will succeed. If this call is made with the same billing group name but different configuration a ResourceAlreadyExistsException is thrown. Requires permission to access the CreateBillingGroup action.

```sql
INSERT INTO aws.iot.billing_groups (
billingGroupProperties,
tags,
billing_group_name,
region
)
SELECT 
'{{ billingGroupProperties }}',
'{{ tags }}',
'{{ billing_group_name }}',
'{{ region }}'
RETURNING
billing_group_arn,
billing_group_id,
billing_group_name
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: billing_groups
  props:
    - name: billing_group_name
      value: "{{ billing_group_name }}"
      description: Required parameter for the billing_groups resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the billing_groups resource.
    - name: billingGroupProperties
      description: |
        The properties of a billing group.
      value:
        billingGroupDescription: "{{ billingGroupDescription }}"
    - name: tags
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_billing_group"
    values={[
        { label: 'update_billing_group', value: 'update_billing_group' },
        { label: 'add_thing_to_billing_group', value: 'add_thing_to_billing_group' }
    ]}
>
<TabItem value="update_billing_group">

Updates information about the billing group. Requires permission to access the UpdateBillingGroup action.

```sql
UPDATE aws.iot.billing_groups
SET 
billingGroupProperties = '{{ billingGroupProperties }}',
expectedVersion = {{ expectedVersion }}
WHERE 
billing_group_name = '{{ billing_group_name }}' --required
AND region = '{{ region }}' --required
AND billingGroupProperties = '{{ billingGroupProperties }}' --required
RETURNING
version;
```
</TabItem>
<TabItem value="add_thing_to_billing_group">

Adds a thing to a billing group. Requires permission to access the AddThingToBillingGroup action.

```sql
UPDATE aws.iot.billing_groups
SET 
billingGroupName = '{{ billingGroupName }}',
billingGroupArn = '{{ billingGroupArn }}',
thingName = '{{ thingName }}',
thingArn = '{{ thingArn }}'
WHERE 
region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_billing_group"
    values={[
        { label: 'delete_billing_group', value: 'delete_billing_group' }
    ]}
>
<TabItem value="delete_billing_group">

Deletes the billing group. Requires permission to access the DeleteBillingGroup action.

```sql
DELETE FROM aws.iot.billing_groups
WHERE billing_group_name = '{{ billing_group_name }}' --required
AND region = '{{ region }}' --required
AND expectedVersion = '{{ expectedVersion }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="remove_thing_from_billing_group"
    values={[
        { label: 'remove_thing_from_billing_group', value: 'remove_thing_from_billing_group' }
    ]}
>
<TabItem value="remove_thing_from_billing_group">

Removes the given thing from the billing group. Requires permission to access the RemoveThingFromBillingGroup action. This call is asynchronous. It might take several seconds for the detachment to propagate.

```sql
EXEC aws.iot.billing_groups.remove_thing_from_billing_group 
@region='{{ region }}' --required 
@@json=
'{
"billingGroupName": "{{ billingGroupName }}", 
"billingGroupArn": "{{ billingGroupArn }}", 
"thingName": "{{ thingName }}", 
"thingArn": "{{ thingArn }}"
}'
;
```
</TabItem>
</Tabs>
