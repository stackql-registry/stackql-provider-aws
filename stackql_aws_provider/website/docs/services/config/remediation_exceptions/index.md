--- 
title: remediation_exceptions
hide_title: false
hide_table_of_contents: false
keywords:
  - remediation_exceptions
  - config
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

Creates, updates, deletes, gets or lists a <code>remediation_exceptions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="remediation_exceptions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.config.remediation_exceptions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_remediation_exceptions"
    values={[
        { label: 'describe_remediation_exceptions', value: 'describe_remediation_exceptions' }
    ]}
>
<TabItem value="describe_remediation_exceptions">

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
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The nextToken string returned in a previous request that you use to request the next page of results in a paginated response.</td>
</tr>
<tr>
    <td><CopyableCode code="RemediationExceptions" /></td>
    <td><code>array</code></td>
    <td>Returns a list of remediation exception objects.</td>
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
    <td><a href="#describe_remediation_exceptions"><CopyableCode code="describe_remediation_exceptions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the details of one or more remediation exceptions. A detailed view of a remediation exception for a set of resources that includes an explanation of an exception and the time when the exception will be deleted. When you specify the limit and the next token, you receive a paginated response. Config generates a remediation exception when a problem occurs executing a remediation action to a specific resource. Remediation exceptions blocks auto-remediation until the exception is cleared. When you specify the limit and the next token, you receive a paginated response. Limit and next token are not applicable if you request resources in batch. It is only applicable, when you request all resources.</td>
</tr>
<tr>
    <td><a href="#put_remediation_exceptions"><CopyableCode code="put_remediation_exceptions" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ConfigRuleName"><code>ConfigRuleName</code></a>, <a href="#parameter-ResourceKeys"><code>ResourceKeys</code></a></td>
    <td></td>
    <td>A remediation exception is when a specified resource is no longer considered for auto-remediation. This API adds a new exception or updates an existing exception for a specified resource with a specified Config rule. Exceptions block auto remediation Config generates a remediation exception when a problem occurs running a remediation action for a specified resource. Remediation exceptions blocks auto-remediation until the exception is cleared. Manual remediation is recommended when placing an exception When placing an exception on an Amazon Web Services resource, it is recommended that remediation is set as manual remediation until the given Config rule for the specified resource evaluates the resource as NON_COMPLIANT. Once the resource has been evaluated as NON_COMPLIANT, you can add remediation exceptions and change the remediation type back from Manual to Auto if you want to use auto-remediation. Otherwise, using auto-remediation before a NON_COMPLIANT evaluation result can delete resources before the exception is applied. Exceptions can only be performed on non-compliant resources Placing an exception can only be performed on resources that are NON_COMPLIANT. If you use this API for COMPLIANT resources or resources that are NOT_APPLICABLE, a remediation exception will not be generated. For more information on the conditions that initiate the possible Config evaluation results, see Concepts | Config Rules in the Config Developer Guide. Exceptions cannot be placed on service-linked remediation actions You cannot place an exception on service-linked remediation actions, such as remediation actions put by an organizational conformance pack. Auto remediation can be initiated even for compliant resources If you enable auto remediation for a specific Config rule using the PutRemediationConfigurations API or the Config console, it initiates the remediation process for all non-compliant resources for that specific rule. The auto remediation process relies on the compliance data snapshot which is captured on a periodic basis. Any non-compliant resource that is updated between the snapshot schedule will continue to be remediated based on the last known compliance data snapshot. This means that in some cases auto remediation can be initiated even for compliant resources, since the bootstrap processor uses a database that can have stale evaluation results based on the last known compliance data snapshot.</td>
</tr>
<tr>
    <td><a href="#delete_remediation_exceptions"><CopyableCode code="delete_remediation_exceptions" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes one or more remediation exceptions mentioned in the resource keys. Config generates a remediation exception when a problem occurs executing a remediation action to a specific resource. Remediation exceptions blocks auto-remediation until the exception is cleared.</td>
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
    defaultValue="describe_remediation_exceptions"
    values={[
        { label: 'describe_remediation_exceptions', value: 'describe_remediation_exceptions' }
    ]}
>
<TabItem value="describe_remediation_exceptions">

Returns the details of one or more remediation exceptions. A detailed view of a remediation exception for a set of resources that includes an explanation of an exception and the time when the exception will be deleted. When you specify the limit and the next token, you receive a paginated response. Config generates a remediation exception when a problem occurs executing a remediation action to a specific resource. Remediation exceptions blocks auto-remediation until the exception is cleared. When you specify the limit and the next token, you receive a paginated response. Limit and next token are not applicable if you request resources in batch. It is only applicable, when you request all resources.

```sql
SELECT
NextToken,
RemediationExceptions
FROM aws.config.remediation_exceptions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_remediation_exceptions"
    values={[
        { label: 'put_remediation_exceptions', value: 'put_remediation_exceptions' }
    ]}
>
<TabItem value="put_remediation_exceptions">

A remediation exception is when a specified resource is no longer considered for auto-remediation. This API adds a new exception or updates an existing exception for a specified resource with a specified Config rule. Exceptions block auto remediation Config generates a remediation exception when a problem occurs running a remediation action for a specified resource. Remediation exceptions blocks auto-remediation until the exception is cleared. Manual remediation is recommended when placing an exception When placing an exception on an Amazon Web Services resource, it is recommended that remediation is set as manual remediation until the given Config rule for the specified resource evaluates the resource as NON_COMPLIANT. Once the resource has been evaluated as NON_COMPLIANT, you can add remediation exceptions and change the remediation type back from Manual to Auto if you want to use auto-remediation. Otherwise, using auto-remediation before a NON_COMPLIANT evaluation result can delete resources before the exception is applied. Exceptions can only be performed on non-compliant resources Placing an exception can only be performed on resources that are NON_COMPLIANT. If you use this API for COMPLIANT resources or resources that are NOT_APPLICABLE, a remediation exception will not be generated. For more information on the conditions that initiate the possible Config evaluation results, see Concepts | Config Rules in the Config Developer Guide. Exceptions cannot be placed on service-linked remediation actions You cannot place an exception on service-linked remediation actions, such as remediation actions put by an organizational conformance pack. Auto remediation can be initiated even for compliant resources If you enable auto remediation for a specific Config rule using the PutRemediationConfigurations API or the Config console, it initiates the remediation process for all non-compliant resources for that specific rule. The auto remediation process relies on the compliance data snapshot which is captured on a periodic basis. Any non-compliant resource that is updated between the snapshot schedule will continue to be remediated based on the last known compliance data snapshot. This means that in some cases auto remediation can be initiated even for compliant resources, since the bootstrap processor uses a database that can have stale evaluation results based on the last known compliance data snapshot.

```sql
REPLACE aws.config.remediation_exceptions
SET 
ConfigRuleName = '{{ ConfigRuleName }}',
ResourceKeys = '{{ ResourceKeys }}',
Message = '{{ Message }}',
ExpirationTime = '{{ ExpirationTime }}'
WHERE 
region = '{{ region }}' --required
AND ConfigRuleName = '{{ ConfigRuleName }}' --required
AND ResourceKeys = '{{ ResourceKeys }}' --required
RETURNING
FailedBatches;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_remediation_exceptions"
    values={[
        { label: 'delete_remediation_exceptions', value: 'delete_remediation_exceptions' }
    ]}
>
<TabItem value="delete_remediation_exceptions">

Deletes one or more remediation exceptions mentioned in the resource keys. Config generates a remediation exception when a problem occurs executing a remediation action to a specific resource. Remediation exceptions blocks auto-remediation until the exception is cleared.

```sql
DELETE FROM aws.config.remediation_exceptions
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
