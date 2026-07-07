--- 
title: aws_service_access_for_organizations
hide_title: false
hide_table_of_contents: false
keywords:
  - aws_service_access_for_organizations
  - organizations
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

Creates, updates, deletes, gets or lists an <code>aws_service_access_for_organizations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="aws_service_access_for_organizations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.organizations.aws_service_access_for_organizations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_aws_service_access_for_organization"
    values={[
        { label: 'list_aws_service_access_for_organization', value: 'list_aws_service_access_for_organization' }
    ]}
>
<TabItem value="list_aws_service_access_for_organization">

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
    <td><CopyableCode code="DateEnabled" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date that the service principal was enabled for integration with Organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="ServicePrincipal" /></td>
    <td><code>string</code></td>
    <td>The name of the service principal. This is typically in the form of a URL, such as: servicename.amazonaws.com. (pattern: &lt;code&gt;&#91;\w+=,.@-&#93;*&lt;/code&gt;)</td>
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
    <td><a href="#list_aws_service_access_for_organization"><CopyableCode code="list_aws_service_access_for_organization" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of the Amazon Web Services services that you enabled to integrate with your organization. After a service on this list creates the resources that it requires for the integration, it can perform operations on your organization and its accounts. For more information about integrating other services with Organizations, including the list of services that currently work with Organizations, see Using Organizations with other Amazon Web Services services in the Organizations User Guide. You can only call this operation from the management account or a member account that is a delegated administrator.</td>
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
    defaultValue="list_aws_service_access_for_organization"
    values={[
        { label: 'list_aws_service_access_for_organization', value: 'list_aws_service_access_for_organization' }
    ]}
>
<TabItem value="list_aws_service_access_for_organization">

Returns a list of the Amazon Web Services services that you enabled to integrate with your organization. After a service on this list creates the resources that it requires for the integration, it can perform operations on your organization and its accounts. For more information about integrating other services with Organizations, including the list of services that currently work with Organizations, see Using Organizations with other Amazon Web Services services in the Organizations User Guide. You can only call this operation from the management account or a member account that is a delegated administrator.

```sql
SELECT
DateEnabled,
ServicePrincipal
FROM aws.organizations.aws_service_access_for_organizations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
