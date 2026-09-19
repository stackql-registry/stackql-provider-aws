--- 
title: domain_identities
hide_title: false
hide_table_of_contents: false
keywords:
  - domain_identities
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

Creates, updates, deletes, gets or lists a <code>domain_identities</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="domain_identities" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ses.domain_identities" /></td></tr>
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
    <td><a href="#verify_domain_identity"><CopyableCode code="verify_domain_identity" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-Domain"><code>Domain</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Adds a domain to the list of identities for your Amazon SES account in the current Amazon Web Services Region and attempts to verify it. For more information about verifying domains, see Verifying Email Addresses and Domains in the Amazon SES Developer Guide. You can execute this operation no more than once per second.</td>
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
<tr id="parameter-Domain">
    <td><CopyableCode code="Domain" /></td>
    <td><code>string</code></td>
    <td>The domain to be verified.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="verify_domain_identity"
    values={[
        { label: 'verify_domain_identity', value: 'verify_domain_identity' }
    ]}
>
<TabItem value="verify_domain_identity">

Adds a domain to the list of identities for your Amazon SES account in the current Amazon Web Services Region and attempts to verify it. For more information about verifying domains, see Verifying Email Addresses and Domains in the Amazon SES Developer Guide. You can execute this operation no more than once per second.

```sql
EXEC aws.ses.domain_identities.verify_domain_identity 
@Domain='{{ Domain }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
