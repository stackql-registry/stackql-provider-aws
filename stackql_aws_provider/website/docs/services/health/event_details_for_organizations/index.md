--- 
title: event_details_for_organizations
hide_title: false
hide_table_of_contents: false
keywords:
  - event_details_for_organizations
  - health
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

Creates, updates, deletes, gets or lists an <code>event_details_for_organizations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="event_details_for_organizations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.health.event_details_for_organizations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_event_details_for_organization"
    values={[
        { label: 'describe_event_details_for_organization', value: 'describe_event_details_for_organization' }
    ]}
>
<TabItem value="describe_event_details_for_organization">

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
    <td><CopyableCode code="failed_set" /></td>
    <td><code>array</code></td>
    <td>Error messages for any events that could not be retrieved.</td>
</tr>
<tr>
    <td><CopyableCode code="successful_set" /></td>
    <td><code>array</code></td>
    <td>Information about the events that could be retrieved.</td>
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
    <td><a href="#describe_event_details_for_organization"><CopyableCode code="describe_event_details_for_organization" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns detailed information about one or more specified events for one or more Amazon Web Services accounts in your organization. This information includes standard event data (such as the Amazon Web Services Region and service), an event description, and (depending on the event) possible metadata. This operation doesn't return affected entities, such as the resources related to the event. To return affected entities, use the DescribeAffectedEntitiesForOrganization operation. Before you can call this operation, you must first enable Health to work with Organizations. To do this, call the EnableHealthServiceAccessForOrganization operation from your organization's management account. When you call the DescribeEventDetailsForOrganization operation, specify the organizationEventDetailFilters object in the request. Depending on the Health event type, note the following differences: To return event details for a public event, you must specify a null value for the awsAccountId parameter. If you specify an account ID for a public event, Health returns an error message because public events aren't specific to an account. To return event details for an event that is specific to an account in your organization, you must specify the awsAccountId parameter in the request. If you don't specify an account ID, Health returns an error message because the event is specific to an account in your organization. For more information, see Event. This operation doesn't support resource-level permissions. You can't use this operation to allow or deny access to specific Health events. For more information, see Resource- and action-based conditions in the Health User Guide.</td>
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
    defaultValue="describe_event_details_for_organization"
    values={[
        { label: 'describe_event_details_for_organization', value: 'describe_event_details_for_organization' }
    ]}
>
<TabItem value="describe_event_details_for_organization">

Returns detailed information about one or more specified events for one or more Amazon Web Services accounts in your organization. This information includes standard event data (such as the Amazon Web Services Region and service), an event description, and (depending on the event) possible metadata. This operation doesn't return affected entities, such as the resources related to the event. To return affected entities, use the DescribeAffectedEntitiesForOrganization operation. Before you can call this operation, you must first enable Health to work with Organizations. To do this, call the EnableHealthServiceAccessForOrganization operation from your organization's management account. When you call the DescribeEventDetailsForOrganization operation, specify the organizationEventDetailFilters object in the request. Depending on the Health event type, note the following differences: To return event details for a public event, you must specify a null value for the awsAccountId parameter. If you specify an account ID for a public event, Health returns an error message because public events aren't specific to an account. To return event details for an event that is specific to an account in your organization, you must specify the awsAccountId parameter in the request. If you don't specify an account ID, Health returns an error message because the event is specific to an account in your organization. For more information, see Event. This operation doesn't support resource-level permissions. You can't use this operation to allow or deny access to specific Health events. For more information, see Resource- and action-based conditions in the Health User Guide.

```sql
SELECT
failed_set,
successful_set
FROM aws.health.event_details_for_organizations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
