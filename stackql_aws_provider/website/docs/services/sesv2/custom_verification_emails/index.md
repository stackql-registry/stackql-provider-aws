--- 
title: custom_verification_emails
hide_title: false
hide_table_of_contents: false
keywords:
  - custom_verification_emails
  - sesv2
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

Creates, updates, deletes, gets or lists a <code>custom_verification_emails</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="custom_verification_emails" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sesv2.custom_verification_emails" /></td></tr>
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
    <td><a href="#send_custom_verification_email"><CopyableCode code="send_custom_verification_email" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-EmailAddress"><code>EmailAddress</code></a>, <a href="#parameter-TemplateName"><code>TemplateName</code></a></td>
    <td></td>
    <td>Adds an email address to the list of identities for your Amazon SES account in the current Amazon Web Services Region and attempts to verify it. As a result of executing this operation, a customized verification email is sent to the specified address. To use this operation, you must first create a custom verification email template. For more information about creating and using custom verification email templates, see Using custom verification email templates in the Amazon SES Developer Guide. You can execute this operation no more than once per second.</td>
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
    defaultValue="send_custom_verification_email"
    values={[
        { label: 'send_custom_verification_email', value: 'send_custom_verification_email' }
    ]}
>
<TabItem value="send_custom_verification_email">

Adds an email address to the list of identities for your Amazon SES account in the current Amazon Web Services Region and attempts to verify it. As a result of executing this operation, a customized verification email is sent to the specified address. To use this operation, you must first create a custom verification email template. For more information about creating and using custom verification email templates, see Using custom verification email templates in the Amazon SES Developer Guide. You can execute this operation no more than once per second.

```sql
EXEC aws.sesv2.custom_verification_emails.send_custom_verification_email 
@region='{{ region }}' --required 
@@json=
'{
"EmailAddress": "{{ EmailAddress }}", 
"TemplateName": "{{ TemplateName }}", 
"ConfigurationSetName": "{{ ConfigurationSetName }}"
}'
;
```
</TabItem>
</Tabs>
