--- 
title: aws_service_accesses
hide_title: false
hide_table_of_contents: false
keywords:
  - aws_service_accesses
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

Creates, updates, deletes, gets or lists an <code>aws_service_accesses</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="aws_service_accesses" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.organizations.aws_service_accesses" /></td></tr>
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
    <td><CopyableCode code="date_enabled" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date that the service principal was enabled for integration with Organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="service_principal" /></td>
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
<tr>
    <td><a href="#disable_aws_service_access"><CopyableCode code="disable_aws_service_access" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ServicePrincipal"><code>ServicePrincipal</code></a></td>
    <td></td>
    <td>Disables the integration of an Amazon Web Services service (the service that is specified by ServicePrincipal) with Organizations. When you disable integration, the specified service no longer can create a service-linked role in new accounts in your organization. This means the service can't perform operations on your behalf on any new accounts in your organization. The service can still perform operations in older accounts until the service completes its clean-up from Organizations. We strongly recommend that you don't use this command to disable integration between Organizations and the specified Amazon Web Services service. Instead, use the console or commands that are provided by the specified service. This lets the trusted service perform any required initialization when enabling trusted access, such as creating any required resources and any required clean up of resources when disabling trusted access. For information about how to disable trusted service access to your organization using the trusted service, see the Learn more link under the Supports Trusted Access column at Amazon Web Services services that you can use with Organizations. on this page. If you disable access by using this command, it causes the following actions to occur: The service can no longer create a service-linked role in the accounts in your organization. This means that the service can't perform operations on your behalf on any new accounts in your organization. The service can still perform operations in older accounts until the service completes its clean-up from Organizations. The service can no longer perform tasks in the member accounts in the organization, unless those operations are explicitly permitted by the IAM policies that are attached to your roles. This includes any data aggregation from the member accounts to the management account, or to a delegated administrator account, where relevant. Some services detect this and clean up any remaining data or resources related to the integration, while other services stop accessing the organization but leave any historical data and configuration in place to support a possible re-enabling of the integration. Using the other service's console or commands to disable the integration ensures that the other service is aware that it can clean up any resources that are required only for the integration. How the service cleans up its resources in the organization's accounts depends on that service. For more information, see the documentation for the other Amazon Web Services service. After you perform the DisableAWSServiceAccess operation, the specified service can no longer perform operations in your organization's accounts For more information about integrating other services with Organizations, including the list of services that work with Organizations, see Using Organizations with other Amazon Web Services services in the Organizations User Guide. You can only call this operation from the management account.</td>
</tr>
<tr>
    <td><a href="#enable_aws_service_access"><CopyableCode code="enable_aws_service_access" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ServicePrincipal"><code>ServicePrincipal</code></a></td>
    <td></td>
    <td>Provides an Amazon Web Services service (the service that is specified by ServicePrincipal) with permissions to view the structure of an organization, create a service-linked role in all the accounts in the organization, and allow the service to perform operations on behalf of the organization and its accounts. Establishing these permissions can be a first step in enabling the integration of an Amazon Web Services service with Organizations. We recommend that you enable integration between Organizations and the specified Amazon Web Services service by using the console or commands that are provided by the specified service. Doing so ensures that the service is aware that it can create the resources that are required for the integration. How the service creates those resources in the organization's accounts depends on that service. For more information, see the documentation for the other Amazon Web Services service. For more information about enabling services to integrate with Organizations, see Using Organizations with other Amazon Web Services services in the Organizations User Guide. You can only call this operation from the management account.</td>
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
date_enabled,
service_principal
FROM aws.organizations.aws_service_accesses
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="disable_aws_service_access"
    values={[
        { label: 'disable_aws_service_access', value: 'disable_aws_service_access' },
        { label: 'enable_aws_service_access', value: 'enable_aws_service_access' }
    ]}
>
<TabItem value="disable_aws_service_access">

Disables the integration of an Amazon Web Services service (the service that is specified by ServicePrincipal) with Organizations. When you disable integration, the specified service no longer can create a service-linked role in new accounts in your organization. This means the service can't perform operations on your behalf on any new accounts in your organization. The service can still perform operations in older accounts until the service completes its clean-up from Organizations. We strongly recommend that you don't use this command to disable integration between Organizations and the specified Amazon Web Services service. Instead, use the console or commands that are provided by the specified service. This lets the trusted service perform any required initialization when enabling trusted access, such as creating any required resources and any required clean up of resources when disabling trusted access. For information about how to disable trusted service access to your organization using the trusted service, see the Learn more link under the Supports Trusted Access column at Amazon Web Services services that you can use with Organizations. on this page. If you disable access by using this command, it causes the following actions to occur: The service can no longer create a service-linked role in the accounts in your organization. This means that the service can't perform operations on your behalf on any new accounts in your organization. The service can still perform operations in older accounts until the service completes its clean-up from Organizations. The service can no longer perform tasks in the member accounts in the organization, unless those operations are explicitly permitted by the IAM policies that are attached to your roles. This includes any data aggregation from the member accounts to the management account, or to a delegated administrator account, where relevant. Some services detect this and clean up any remaining data or resources related to the integration, while other services stop accessing the organization but leave any historical data and configuration in place to support a possible re-enabling of the integration. Using the other service's console or commands to disable the integration ensures that the other service is aware that it can clean up any resources that are required only for the integration. How the service cleans up its resources in the organization's accounts depends on that service. For more information, see the documentation for the other Amazon Web Services service. After you perform the DisableAWSServiceAccess operation, the specified service can no longer perform operations in your organization's accounts For more information about integrating other services with Organizations, including the list of services that work with Organizations, see Using Organizations with other Amazon Web Services services in the Organizations User Guide. You can only call this operation from the management account.

```sql
EXEC aws.organizations.aws_service_accesses.disable_aws_service_access 
@region='{{ region }}' --required 
@@json=
'{
"ServicePrincipal": "{{ ServicePrincipal }}"
}'
;
```
</TabItem>
<TabItem value="enable_aws_service_access">

Provides an Amazon Web Services service (the service that is specified by ServicePrincipal) with permissions to view the structure of an organization, create a service-linked role in all the accounts in the organization, and allow the service to perform operations on behalf of the organization and its accounts. Establishing these permissions can be a first step in enabling the integration of an Amazon Web Services service with Organizations. We recommend that you enable integration between Organizations and the specified Amazon Web Services service by using the console or commands that are provided by the specified service. Doing so ensures that the service is aware that it can create the resources that are required for the integration. How the service creates those resources in the organization's accounts depends on that service. For more information, see the documentation for the other Amazon Web Services service. For more information about enabling services to integrate with Organizations, see Using Organizations with other Amazon Web Services services in the Organizations User Guide. You can only call this operation from the management account.

```sql
EXEC aws.organizations.aws_service_accesses.enable_aws_service_access 
@region='{{ region }}' --required 
@@json=
'{
"ServicePrincipal": "{{ ServicePrincipal }}"
}'
;
```
</TabItem>
</Tabs>
