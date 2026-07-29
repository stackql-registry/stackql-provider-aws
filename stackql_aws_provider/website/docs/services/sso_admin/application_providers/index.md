--- 
title: application_providers
hide_title: false
hide_table_of_contents: false
keywords:
  - application_providers
  - sso_admin
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

Creates, updates, deletes, gets or lists an <code>application_providers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="application_providers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sso_admin.application_providers" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_application_provider"
    values={[
        { label: 'describe_application_provider', value: 'describe_application_provider' },
        { label: 'list_application_providers', value: 'list_application_providers' }
    ]}
>
<TabItem value="describe_application_provider">

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
    <td><CopyableCode code="application_provider_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the application provider. (pattern: &lt;code&gt;arn:aws(-&#91;a-z&#93;&#123;1,5&#125;)&#123;0,3&#125;:sso::aws:applicationProvider/&#91;a-zA-Z0-9-/&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="display_data" /></td>
    <td><code>object</code></td>
    <td>A structure with details about the display data for the application provider.</td>
</tr>
<tr>
    <td><CopyableCode code="federation_protocol" /></td>
    <td><code>string</code></td>
    <td>The protocol used to federate to the application provider. (SAML, OAUTH)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_server_config" /></td>
    <td><code>object</code></td>
    <td>A structure with details about the receiving application.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_application_providers">

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
    <td><CopyableCode code="application_provider_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the application provider. (pattern: &lt;code&gt;arn:aws(-&#91;a-z&#93;&#123;1,5&#125;)&#123;0,3&#125;:sso::aws:applicationProvider/&#91;a-zA-Z0-9-/&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="display_data" /></td>
    <td><code>object</code></td>
    <td>A structure that describes how IAM Identity Center represents the application provider in the portal.</td>
</tr>
<tr>
    <td><CopyableCode code="federation_protocol" /></td>
    <td><code>string</code></td>
    <td>The protocol that the application provider uses to perform federation. (SAML, OAUTH)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_server_config" /></td>
    <td><code>object</code></td>
    <td>A structure that describes the application provider's resource server.</td>
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
    <td><a href="#describe_application_provider"><CopyableCode code="describe_application_provider" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves details about a provider that can be used to connect an Amazon Web Services managed application or customer managed application to IAM Identity Center.</td>
</tr>
<tr>
    <td><a href="#list_application_providers"><CopyableCode code="list_application_providers" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the application providers configured in the IAM Identity Center identity store.</td>
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
    defaultValue="describe_application_provider"
    values={[
        { label: 'describe_application_provider', value: 'describe_application_provider' },
        { label: 'list_application_providers', value: 'list_application_providers' }
    ]}
>
<TabItem value="describe_application_provider">

Retrieves details about a provider that can be used to connect an Amazon Web Services managed application or customer managed application to IAM Identity Center.

```sql
SELECT
application_provider_arn,
display_data,
federation_protocol,
resource_server_config
FROM aws.sso_admin.application_providers
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_application_providers">

Lists the application providers configured in the IAM Identity Center identity store.

```sql
SELECT
application_provider_arn,
display_data,
federation_protocol,
resource_server_config
FROM aws.sso_admin.application_providers
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
