--- 
title: services_in_scopes
hide_title: false
hide_table_of_contents: false
keywords:
  - services_in_scopes
  - auditmanager
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

Creates, updates, deletes, gets or lists a <code>services_in_scopes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="services_in_scopes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.auditmanager.services_in_scopes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_services_in_scope"
    values={[
        { label: 'get_services_in_scope', value: 'get_services_in_scope' }
    ]}
>
<TabItem value="get_services_in_scope">

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
    <td><CopyableCode code="service_metadata" /></td>
    <td><code>array</code></td>
    <td>The metadata that's associated with the Amazon Web Services service.</td>
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
    <td><a href="#get_services_in_scope"><CopyableCode code="get_services_in_scope" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets a list of the Amazon Web Services services from which Audit Manager can collect evidence. Audit Manager defines which Amazon Web Services services are in scope for an assessment. Audit Manager infers this scope by examining the assessment’s controls and their data sources, and then mapping this information to one or more of the corresponding Amazon Web Services services that are in this list. For information about why it's no longer possible to specify services in scope manually, see I can't edit the services in scope for my assessment in the Troubleshooting section of the Audit Manager user guide.</td>
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
    defaultValue="get_services_in_scope"
    values={[
        { label: 'get_services_in_scope', value: 'get_services_in_scope' }
    ]}
>
<TabItem value="get_services_in_scope">

Gets a list of the Amazon Web Services services from which Audit Manager can collect evidence. Audit Manager defines which Amazon Web Services services are in scope for an assessment. Audit Manager infers this scope by examining the assessment’s controls and their data sources, and then mapping this information to one or more of the corresponding Amazon Web Services services that are in this list. For information about why it's no longer possible to specify services in scope manually, see I can't edit the services in scope for my assessment in the Troubleshooting section of the Audit Manager user guide.

```sql
SELECT
service_metadata
FROM aws.auditmanager.services_in_scopes
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
