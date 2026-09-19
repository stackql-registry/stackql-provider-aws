--- 
title: aws_organizations_accesses
hide_title: false
hide_table_of_contents: false
keywords:
  - aws_organizations_accesses
  - servicecatalog
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

Creates, updates, deletes, gets or lists an <code>aws_organizations_accesses</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="aws_organizations_accesses" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.servicecatalog.aws_organizations_accesses" /></td></tr>
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
    <td><a href="#disable_aws_organizations_access"><CopyableCode code="disable_aws_organizations_access" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Disable portfolio sharing through the Organizations service. This command will not delete your current shares, but prevents you from creating new shares throughout your organization. Current shares are not kept in sync with your organization structure if the structure changes after calling this API. Only the management account in the organization can call this API. You cannot call this API if there are active delegated administrators in the organization. Note that a delegated administrator is not authorized to invoke DisableAWSOrganizationsAccess. If you share an Service Catalog portfolio in an organization within Organizations, and then disable Organizations access for Service Catalog, the portfolio access permissions will not sync with the latest changes to the organization structure. Specifically, accounts that you removed from the organization after disabling Service Catalog access will retain access to the previously shared portfolio.</td>
</tr>
<tr>
    <td><a href="#enable_aws_organizations_access"><CopyableCode code="enable_aws_organizations_access" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Enable portfolio sharing feature through Organizations. This API will allow Service Catalog to receive updates on your organization in order to sync your shares with the current structure. This API can only be called by the management account in the organization. When you call this API, Service Catalog calls organizations:EnableAWSServiceAccess on your behalf so that your shares stay in sync with any changes in your Organizations structure. Note that a delegated administrator is not authorized to invoke EnableAWSOrganizationsAccess. If you have previously disabled Organizations access for Service Catalog, and then enable access again, the portfolio access permissions might not sync with the latest changes to the organization structure. Specifically, accounts that you removed from the organization after disabling Service Catalog access, and before you enabled access again, can retain access to the previously shared portfolio. As a result, an account that has been removed from the organization might still be able to create or manage Amazon Web Services resources when it is no longer authorized to do so. Amazon Web Services is working to resolve this issue.</td>
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
    defaultValue="disable_aws_organizations_access"
    values={[
        { label: 'disable_aws_organizations_access', value: 'disable_aws_organizations_access' },
        { label: 'enable_aws_organizations_access', value: 'enable_aws_organizations_access' }
    ]}
>
<TabItem value="disable_aws_organizations_access">

Disable portfolio sharing through the Organizations service. This command will not delete your current shares, but prevents you from creating new shares throughout your organization. Current shares are not kept in sync with your organization structure if the structure changes after calling this API. Only the management account in the organization can call this API. You cannot call this API if there are active delegated administrators in the organization. Note that a delegated administrator is not authorized to invoke DisableAWSOrganizationsAccess. If you share an Service Catalog portfolio in an organization within Organizations, and then disable Organizations access for Service Catalog, the portfolio access permissions will not sync with the latest changes to the organization structure. Specifically, accounts that you removed from the organization after disabling Service Catalog access will retain access to the previously shared portfolio.

```sql
EXEC aws.servicecatalog.aws_organizations_accesses.disable_aws_organizations_access 
@region='{{ region }}' --required 
;
```
</TabItem>
<TabItem value="enable_aws_organizations_access">

Enable portfolio sharing feature through Organizations. This API will allow Service Catalog to receive updates on your organization in order to sync your shares with the current structure. This API can only be called by the management account in the organization. When you call this API, Service Catalog calls organizations:EnableAWSServiceAccess on your behalf so that your shares stay in sync with any changes in your Organizations structure. Note that a delegated administrator is not authorized to invoke EnableAWSOrganizationsAccess. If you have previously disabled Organizations access for Service Catalog, and then enable access again, the portfolio access permissions might not sync with the latest changes to the organization structure. Specifically, accounts that you removed from the organization after disabling Service Catalog access, and before you enabled access again, can retain access to the previously shared portfolio. As a result, an account that has been removed from the organization might still be able to create or manage Amazon Web Services resources when it is no longer authorized to do so. Amazon Web Services is working to resolve this issue.

```sql
EXEC aws.servicecatalog.aws_organizations_accesses.enable_aws_organizations_access 
@region='{{ region }}' --required 
;
```
</TabItem>
</Tabs>
