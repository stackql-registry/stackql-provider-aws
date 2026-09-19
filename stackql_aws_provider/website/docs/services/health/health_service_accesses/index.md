--- 
title: health_service_accesses
hide_title: false
hide_table_of_contents: false
keywords:
  - health_service_accesses
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

Creates, updates, deletes, gets or lists a <code>health_service_accesses</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="health_service_accesses" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.health.health_service_accesses" /></td></tr>
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
    <td><a href="#disable_health_service_access_for_organization"><CopyableCode code="disable_health_service_access_for_organization" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Disables Health from working with Organizations. To call this operation, you must sign in to the organization's management account. For more information, see Aggregating Health events in the Health User Guide. This operation doesn't remove the service-linked role from the management account in your organization. You must use the IAM console, API, or Command Line Interface (CLI) to remove the service-linked role. For more information, see Deleting a Service-Linked Role in the IAM User Guide. You can also disable the organizational feature by using the Organizations DisableAWSServiceAccess API operation. After you call this operation, Health stops aggregating events for all other Amazon Web Services accounts in your organization. If you call the Health API operations for organizational view, Health returns an error. Health continues to aggregate health events for your Amazon Web Services account.</td>
</tr>
<tr>
    <td><a href="#enable_health_service_access_for_organization"><CopyableCode code="enable_health_service_access_for_organization" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Enables Health to work with Organizations. You can use the organizational view feature to aggregate events from all Amazon Web Services accounts in your organization in a centralized location. This operation also creates a service-linked role for the management account in the organization. To call this operation, you must meet the following requirements: You must have a Business, Enterprise On-Ramp, or Enterprise Support plan from Amazon Web Services Support to use the Health API. If you call the Health API from an Amazon Web Services account that doesn't have a Business, Enterprise On-Ramp, or Enterprise Support plan, you receive a SubscriptionRequiredException error. You must have permission to call this operation from the organization's management account. For example IAM policies, see Health identity-based policy examples. If you don't have the required support plan, you can instead use the Health console to enable the organizational view feature. For more information, see Aggregating Health events in the Health User Guide.</td>
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

## Lifecycle Methods

<Tabs
    defaultValue="disable_health_service_access_for_organization"
    values={[
        { label: 'disable_health_service_access_for_organization', value: 'disable_health_service_access_for_organization' },
        { label: 'enable_health_service_access_for_organization', value: 'enable_health_service_access_for_organization' }
    ]}
>
<TabItem value="disable_health_service_access_for_organization">

Disables Health from working with Organizations. To call this operation, you must sign in to the organization's management account. For more information, see Aggregating Health events in the Health User Guide. This operation doesn't remove the service-linked role from the management account in your organization. You must use the IAM console, API, or Command Line Interface (CLI) to remove the service-linked role. For more information, see Deleting a Service-Linked Role in the IAM User Guide. You can also disable the organizational feature by using the Organizations DisableAWSServiceAccess API operation. After you call this operation, Health stops aggregating events for all other Amazon Web Services accounts in your organization. If you call the Health API operations for organizational view, Health returns an error. Health continues to aggregate health events for your Amazon Web Services account.

```sql
EXEC aws.health.health_service_accesses.disable_health_service_access_for_organization 
@region='{{ region }}' --required 
;
```
</TabItem>
<TabItem value="enable_health_service_access_for_organization">

Enables Health to work with Organizations. You can use the organizational view feature to aggregate events from all Amazon Web Services accounts in your organization in a centralized location. This operation also creates a service-linked role for the management account in the organization. To call this operation, you must meet the following requirements: You must have a Business, Enterprise On-Ramp, or Enterprise Support plan from Amazon Web Services Support to use the Health API. If you call the Health API from an Amazon Web Services account that doesn't have a Business, Enterprise On-Ramp, or Enterprise Support plan, you receive a SubscriptionRequiredException error. You must have permission to call this operation from the organization's management account. For example IAM policies, see Health identity-based policy examples. If you don't have the required support plan, you can instead use the Health console to enable the organizational view feature. For more information, see Aggregating Health events in the Health User Guide.

```sql
EXEC aws.health.health_service_accesses.enable_health_service_access_for_organization 
@region='{{ region }}' --required 
;
```
</TabItem>
</Tabs>
