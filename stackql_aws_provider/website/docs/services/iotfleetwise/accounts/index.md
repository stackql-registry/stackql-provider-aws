--- 
title: accounts
hide_title: false
hide_table_of_contents: false
keywords:
  - accounts
  - iotfleetwise
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

Creates, updates, deletes, gets or lists an <code>accounts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="accounts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iotfleetwise.accounts" /></td></tr>
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
    <td><a href="#register_account"><CopyableCode code="register_account" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This API operation contains deprecated parameters. Register your account again without the Timestream resources parameter so that Amazon Web Services IoT FleetWise can remove the Timestream metadata stored. You should then pass the data destination into the CreateCampaign API operation. You must delete any existing campaigns that include an empty data destination before you register your account again. For more information, see the DeleteCampaign API operation. If you want to delete the Timestream inline policy from the service-linked role, such as to mitigate an overly permissive policy, you must first delete any existing campaigns. Then delete the service-linked role and register your account again to enable CloudWatch metrics. For more information, see DeleteServiceLinkedRole in the Identity and Access Management API Reference. Registers your Amazon Web Services account, IAM, and Amazon Timestream resources so Amazon Web Services IoT FleetWise can transfer your vehicle data to the Amazon Web Services Cloud. For more information, including step-by-step procedures, see Setting up Amazon Web Services IoT FleetWise. An Amazon Web Services account is not the same thing as a "user." An Amazon Web Services user is an identity that you create using Identity and Access Management (IAM) and takes the form of either an IAM user or an IAM role, both with credentials. A single Amazon Web Services account can, and typically does, contain many users and roles.</td>
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

## `INSERT` examples

<Tabs
    defaultValue="register_account"
    values={[
        { label: 'register_account', value: 'register_account' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="register_account">

This API operation contains deprecated parameters. Register your account again without the Timestream resources parameter so that Amazon Web Services IoT FleetWise can remove the Timestream metadata stored. You should then pass the data destination into the CreateCampaign API operation. You must delete any existing campaigns that include an empty data destination before you register your account again. For more information, see the DeleteCampaign API operation. If you want to delete the Timestream inline policy from the service-linked role, such as to mitigate an overly permissive policy, you must first delete any existing campaigns. Then delete the service-linked role and register your account again to enable CloudWatch metrics. For more information, see DeleteServiceLinkedRole in the Identity and Access Management API Reference. Registers your Amazon Web Services account, IAM, and Amazon Timestream resources so Amazon Web Services IoT FleetWise can transfer your vehicle data to the Amazon Web Services Cloud. For more information, including step-by-step procedures, see Setting up Amazon Web Services IoT FleetWise. An Amazon Web Services account is not the same thing as a "user." An Amazon Web Services user is an identity that you create using Identity and Access Management (IAM) and takes the form of either an IAM user or an IAM role, both with credentials. A single Amazon Web Services account can, and typically does, contain many users and roles.

```sql
INSERT INTO aws.iotfleetwise.accounts (
timestreamResources,
iamResources,
region
)
SELECT 
'{{ timestreamResources }}',
'{{ iamResources }}',
'{{ region }}'
RETURNING
creationTime,
iamResources,
lastModificationTime,
registerAccountStatus,
timestreamResources
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: accounts
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the accounts resource.
    - name: timestreamResources
      description: |
        The registered Amazon Timestream resources that Amazon Web Services IoT FleetWise edge agent software can transfer your vehicle data to.
      value:
        timestreamDatabaseName: "{{ timestreamDatabaseName }}"
        timestreamTableName: "{{ timestreamTableName }}"
    - name: iamResources
      description: |
        The IAM resource that allows Amazon Web Services IoT FleetWise to send data to Amazon Timestream.
      value:
        roleArn: "{{ roleArn }}"
`}</CodeBlock>

</TabItem>
</Tabs>
