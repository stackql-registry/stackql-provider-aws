--- 
title: identity_dkim_attributes
hide_title: false
hide_table_of_contents: false
keywords:
  - identity_dkim_attributes
  - ses
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

Creates, updates, deletes, gets or lists an <code>identity_dkim_attributes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="identity_dkim_attributes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ses.identity_dkim_attributes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_identity_dkim_attributes"
    values={[
        { label: 'get_identity_dkim_attributes', value: 'get_identity_dkim_attributes' }
    ]}
>
<TabItem value="get_identity_dkim_attributes">

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
    <td><CopyableCode code="dkim_attributes" /></td>
    <td><code>string</code></td>
    <td>The DKIM attributes for an email address or a domain.</td>
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
    <td><a href="#get_identity_dkim_attributes"><CopyableCode code="get_identity_dkim_attributes" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-Identities"><code>Identities</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the current status of Easy DKIM signing for an entity. For domain name identities, this operation also returns the DKIM tokens that are required for Easy DKIM signing, and whether Amazon SES has successfully verified that these tokens have been published. This operation takes a list of identities as input and returns the following information for each: Whether Easy DKIM signing is enabled or disabled. A set of DKIM tokens that represent the identity. If the identity is an email address, the tokens represent the domain of that address. Whether Amazon SES has successfully verified the DKIM tokens published in the domain's DNS. This information is only returned for domain name identities, not for email addresses. This operation is throttled at one request per second and can only get DKIM attributes for up to 100 identities at a time. For more information about creating DNS records using DKIM tokens, go to the Amazon SES Developer Guide.</td>
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
<tr id="parameter-Identities">
    <td><CopyableCode code="Identities" /></td>
    <td><code>array</code></td>
    <td>A list of one or more verified identities - email addresses, domains, or both.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_identity_dkim_attributes"
    values={[
        { label: 'get_identity_dkim_attributes', value: 'get_identity_dkim_attributes' }
    ]}
>
<TabItem value="get_identity_dkim_attributes">

Returns the current status of Easy DKIM signing for an entity. For domain name identities, this operation also returns the DKIM tokens that are required for Easy DKIM signing, and whether Amazon SES has successfully verified that these tokens have been published. This operation takes a list of identities as input and returns the following information for each: Whether Easy DKIM signing is enabled or disabled. A set of DKIM tokens that represent the identity. If the identity is an email address, the tokens represent the domain of that address. Whether Amazon SES has successfully verified the DKIM tokens published in the domain's DNS. This information is only returned for domain name identities, not for email addresses. This operation is throttled at one request per second and can only get DKIM attributes for up to 100 identities at a time. For more information about creating DNS records using DKIM tokens, go to the Amazon SES Developer Guide.

```sql
SELECT
dkim_attributes
FROM aws.ses.identity_dkim_attributes
WHERE Identities = '{{ Identities }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
