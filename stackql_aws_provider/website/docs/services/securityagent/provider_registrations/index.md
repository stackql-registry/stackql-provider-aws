--- 
title: provider_registrations
hide_title: false
hide_table_of_contents: false
keywords:
  - provider_registrations
  - securityagent
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

Creates, updates, deletes, gets or lists a <code>provider_registrations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="provider_registrations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.securityagent.provider_registrations" /></td></tr>
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
    <td><a href="#initiate_provider_registration"><CopyableCode code="initiate_provider_registration" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-provider"><code>provider</code></a></td>
    <td></td>
    <td>Initiates the OAuth registration flow with a third-party provider. Returns a redirect URL and CSRF state token for completing the authorization.</td>
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
    defaultValue="initiate_provider_registration"
    values={[
        { label: 'initiate_provider_registration', value: 'initiate_provider_registration' }
    ]}
>
<TabItem value="initiate_provider_registration">

Initiates the OAuth registration flow with a third-party provider. Returns a redirect URL and CSRF state token for completing the authorization.

```sql
EXEC aws.securityagent.provider_registrations.initiate_provider_registration 
@region='{{ region }}' --required 
@@json=
'{
"provider": "{{ provider }}"
}'
;
```
</TabItem>
</Tabs>
