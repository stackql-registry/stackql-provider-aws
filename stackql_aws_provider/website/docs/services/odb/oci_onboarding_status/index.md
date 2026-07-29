--- 
title: oci_onboarding_status
hide_title: false
hide_table_of_contents: false
keywords:
  - oci_onboarding_status
  - odb
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

Creates, updates, deletes, gets or lists an <code>oci_onboarding_status</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="oci_onboarding_status" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.odb.oci_onboarding_status" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_oci_onboarding_status"
    values={[
        { label: 'get_oci_onboarding_status', value: 'get_oci_onboarding_status' }
    ]}
>
<TabItem value="get_oci_onboarding_status">

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
    <td><CopyableCode code="existing_tenancy_activation_link" /></td>
    <td><code>string</code></td>
    <td>The existing OCI tenancy activation link for your Amazon Web Services account.</td>
</tr>
<tr>
    <td><CopyableCode code="new_tenancy_activation_link" /></td>
    <td><code>string</code></td>
    <td>A new OCI tenancy activation link for your Amazon Web Services account.</td>
</tr>
<tr>
    <td><CopyableCode code="oci_identity_domain" /></td>
    <td><code>object</code></td>
    <td>The Oracle Cloud Infrastructure (OCI) identity domain information in the onboarding status response.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td> (NOT_STARTED, PENDING_LINK_GENERATION, PENDING_CUSTOMER_ACTION, PENDING_INITIALIZATION, ACTIVATING, ACTIVE_IN_HOME_REGION, ACTIVE, ACTIVE_LIMITED, FAILED, PUBLIC_OFFER_UNSUPPORTED, SUSPENDED, CANCELED)</td>
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
    <td><a href="#get_oci_onboarding_status"><CopyableCode code="get_oci_onboarding_status" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the tenancy activation link and onboarding status for your Amazon Web Services account.</td>
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
    defaultValue="get_oci_onboarding_status"
    values={[
        { label: 'get_oci_onboarding_status', value: 'get_oci_onboarding_status' }
    ]}
>
<TabItem value="get_oci_onboarding_status">

Returns the tenancy activation link and onboarding status for your Amazon Web Services account.

```sql
SELECT
existing_tenancy_activation_link,
new_tenancy_activation_link,
oci_identity_domain,
status
FROM aws.odb.oci_onboarding_status
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
