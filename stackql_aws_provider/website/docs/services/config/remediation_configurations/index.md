--- 
title: remediation_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - remediation_configurations
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

Creates, updates, deletes, gets or lists a <code>remediation_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="remediation_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.config.remediation_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_remediation_configurations"
    values={[
        { label: 'describe_remediation_configurations', value: 'describe_remediation_configurations' }
    ]}
>
<TabItem value="describe_remediation_configurations">

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
    <td><CopyableCode code="RemediationConfigurations" /></td>
    <td><code>array</code></td>
    <td>Returns a remediation configuration object.</td>
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
    <td><a href="#describe_remediation_configurations"><CopyableCode code="describe_remediation_configurations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the details of one or more remediation configurations.</td>
</tr>
<tr>
    <td><a href="#put_remediation_configurations"><CopyableCode code="put_remediation_configurations" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-RemediationConfigurations"><code>RemediationConfigurations</code></a></td>
    <td></td>
    <td>Adds or updates the remediation configuration with a specific Config rule with the selected target or action. The API creates the RemediationConfiguration object for the Config rule. The Config rule must already exist for you to add a remediation configuration. The target (SSM document) must exist and have permissions to use the target. Be aware of backward incompatible changes If you make backward incompatible changes to the SSM document, you must call this again to ensure the remediations can run. This API does not support adding remediation configurations for service-linked Config Rules such as Organization Config rules, the rules deployed by conformance packs, and rules deployed by Amazon Web Services Security Hub. Required fields For manual remediation configuration, you need to provide a value for automationAssumeRole or use a value in the assumeRolefield to remediate your resources. The SSM automation document can use either as long as it maps to a valid parameter. However, for automatic remediation configuration, the only valid assumeRole field value is AutomationAssumeRole and you need to provide a value for AutomationAssumeRole to remediate your resources. Auto remediation can be initiated even for compliant resources If you enable auto remediation for a specific Config rule using the PutRemediationConfigurations API or the Config console, it initiates the remediation process for all non-compliant resources for that specific rule. The auto remediation process relies on the compliance data snapshot which is captured on a periodic basis. Any non-compliant resource that is updated between the snapshot schedule will continue to be remediated based on the last known compliance data snapshot. This means that in some cases auto remediation can be initiated even for compliant resources, since the bootstrap processor uses a database that can have stale evaluation results based on the last known compliance data snapshot.</td>
</tr>
<tr>
    <td><a href="#delete_remediation_configuration"><CopyableCode code="delete_remediation_configuration" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the remediation configuration.</td>
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
    defaultValue="describe_remediation_configurations"
    values={[
        { label: 'describe_remediation_configurations', value: 'describe_remediation_configurations' }
    ]}
>
<TabItem value="describe_remediation_configurations">

Returns the details of one or more remediation configurations.

```sql
SELECT
RemediationConfigurations
FROM aws.config.remediation_configurations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_remediation_configurations"
    values={[
        { label: 'put_remediation_configurations', value: 'put_remediation_configurations' }
    ]}
>
<TabItem value="put_remediation_configurations">

Adds or updates the remediation configuration with a specific Config rule with the selected target or action. The API creates the RemediationConfiguration object for the Config rule. The Config rule must already exist for you to add a remediation configuration. The target (SSM document) must exist and have permissions to use the target. Be aware of backward incompatible changes If you make backward incompatible changes to the SSM document, you must call this again to ensure the remediations can run. This API does not support adding remediation configurations for service-linked Config Rules such as Organization Config rules, the rules deployed by conformance packs, and rules deployed by Amazon Web Services Security Hub. Required fields For manual remediation configuration, you need to provide a value for automationAssumeRole or use a value in the assumeRolefield to remediate your resources. The SSM automation document can use either as long as it maps to a valid parameter. However, for automatic remediation configuration, the only valid assumeRole field value is AutomationAssumeRole and you need to provide a value for AutomationAssumeRole to remediate your resources. Auto remediation can be initiated even for compliant resources If you enable auto remediation for a specific Config rule using the PutRemediationConfigurations API or the Config console, it initiates the remediation process for all non-compliant resources for that specific rule. The auto remediation process relies on the compliance data snapshot which is captured on a periodic basis. Any non-compliant resource that is updated between the snapshot schedule will continue to be remediated based on the last known compliance data snapshot. This means that in some cases auto remediation can be initiated even for compliant resources, since the bootstrap processor uses a database that can have stale evaluation results based on the last known compliance data snapshot.

```sql
REPLACE aws.config.remediation_configurations
SET 
RemediationConfigurations = '{{ RemediationConfigurations }}'
WHERE 
region = '{{ region }}' --required
AND RemediationConfigurations = '{{ RemediationConfigurations }}' --required
RETURNING
FailedBatches;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_remediation_configuration"
    values={[
        { label: 'delete_remediation_configuration', value: 'delete_remediation_configuration' }
    ]}
>
<TabItem value="delete_remediation_configuration">

Deletes the remediation configuration.

```sql
DELETE FROM aws.config.remediation_configurations
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
