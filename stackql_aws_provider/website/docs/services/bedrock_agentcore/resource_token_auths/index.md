--- 
title: resource_token_auths
hide_title: false
hide_table_of_contents: false
keywords:
  - resource_token_auths
  - bedrock_agentcore
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

Creates, updates, deletes, gets or lists a <code>resource_token_auths</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="resource_token_auths" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bedrock_agentcore.resource_token_auths" /></td></tr>
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
    <td><a href="#complete_resource_token_auth"><CopyableCode code="complete_resource_token_auth" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-userIdentifier"><code>userIdentifier</code></a>, <a href="#parameter-sessionUri"><code>sessionUri</code></a></td>
    <td></td>
    <td>Confirms the user authentication session for obtaining OAuth2.0 tokens for a resource.</td>
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
    defaultValue="complete_resource_token_auth"
    values={[
        { label: 'complete_resource_token_auth', value: 'complete_resource_token_auth' }
    ]}
>
<TabItem value="complete_resource_token_auth">

Confirms the user authentication session for obtaining OAuth2.0 tokens for a resource.

```sql
EXEC aws.bedrock_agentcore.resource_token_auths.complete_resource_token_auth 
@region='{{ region }}' --required 
@@json=
'{
"userIdentifier": "{{ userIdentifier }}", 
"sessionUri": "{{ sessionUri }}"
}'
;
```
</TabItem>
</Tabs>
