--- 
title: procurement_portal_preferences
hide_title: false
hide_table_of_contents: false
keywords:
  - procurement_portal_preferences
  - invoicing
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

Creates, updates, deletes, gets or lists a <code>procurement_portal_preferences</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="procurement_portal_preferences" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.invoicing.procurement_portal_preferences" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_procurement_portal_preference"
    values={[
        { label: 'get_procurement_portal_preference', value: 'get_procurement_portal_preference' },
        { label: 'list_procurement_portal_preferences', value: 'list_procurement_portal_preferences' }
    ]}
>
<TabItem value="get_procurement_portal_preference">

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
    <td><CopyableCode code="aws_account_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID associated with this procurement portal preference. (pattern: &lt;code&gt;\d&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="buyer_domain" /></td>
    <td><code>string</code></td>
    <td>The domain identifier for the buyer in the procurement portal. (NetworkID)</td>
</tr>
<tr>
    <td><CopyableCode code="buyer_identifier" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the buyer in the procurement portal. (pattern: &lt;code&gt;\S+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="contacts" /></td>
    <td><code>array</code></td>
    <td>List of contact information for portal administrators and technical contacts.</td>
</tr>
<tr>
    <td><CopyableCode code="create_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the procurement portal preference was created.</td>
</tr>
<tr>
    <td><CopyableCode code="einvoice_delivery_enabled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether e-invoice delivery is enabled for this procurement portal preference.</td>
</tr>
<tr>
    <td><CopyableCode code="einvoice_delivery_preference" /></td>
    <td><code>object</code></td>
    <td>The configuration settings that specify how e-invoices are delivered to the procurement portal.</td>
</tr>
<tr>
    <td><CopyableCode code="einvoice_delivery_preference_status" /></td>
    <td><code>string</code></td>
    <td>The current status of the e-invoice delivery preference. (PENDING_VERIFICATION, TEST_INITIALIZED, TEST_INITIALIZATION_FAILED, TEST_FAILED, ACTIVE, SUSPENDED)</td>
</tr>
<tr>
    <td><CopyableCode code="einvoice_delivery_preference_status_reason" /></td>
    <td><code>string</code></td>
    <td>The reason for the current e-invoice delivery preference status. (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_update_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the procurement portal preference was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="procurement_portal_instance_endpoint" /></td>
    <td><code>string</code></td>
    <td>The endpoint URL where e-invoices are delivered to the procurement portal. (pattern: &lt;code&gt;\S+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="procurement_portal_name" /></td>
    <td><code>string</code></td>
    <td>The name of the procurement portal. (SAP_BUSINESS_NETWORK, COUPA)</td>
</tr>
<tr>
    <td><CopyableCode code="procurement_portal_preference_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the procurement portal preference. (pattern: &lt;code&gt;arn:aws:invoicing::&#91;0-9&#93;&#123;12&#125;:procurement-portal-preference/&#91;-a-zA-Z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="procurement_portal_shared_secret" /></td>
    <td><code>string</code></td>
    <td>The shared secret or authentication credential used for secure communication with the procurement portal. (pattern: &lt;code&gt;\S+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="purchase_order_retrieval_enabled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether purchase order retrieval is enabled for this procurement portal preference.</td>
</tr>
<tr>
    <td><CopyableCode code="purchase_order_retrieval_endpoint" /></td>
    <td><code>string</code></td>
    <td>The endpoint URL used for retrieving purchase orders from the procurement portal. (pattern: &lt;code&gt;\S+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="purchase_order_retrieval_preference_status" /></td>
    <td><code>string</code></td>
    <td>The current status of the purchase order retrieval preference. (PENDING_VERIFICATION, TEST_INITIALIZED, TEST_INITIALIZATION_FAILED, TEST_FAILED, ACTIVE, SUSPENDED)</td>
</tr>
<tr>
    <td><CopyableCode code="purchase_order_retrieval_preference_status_reason" /></td>
    <td><code>string</code></td>
    <td>The reason for the current purchase order retrieval preference status. (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="selector" /></td>
    <td><code>object</code></td>
    <td>Specifies criteria for selecting which invoices should be processed using a particular procurement portal preference.</td>
</tr>
<tr>
    <td><CopyableCode code="supplier_domain" /></td>
    <td><code>string</code></td>
    <td>The domain identifier for the supplier in the procurement portal. (NetworkID)</td>
</tr>
<tr>
    <td><CopyableCode code="supplier_identifier" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the supplier in the procurement portal. (pattern: &lt;code&gt;\S+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="test_env_preference" /></td>
    <td><code>object</code></td>
    <td>Configuration on settings for the test environment of the procurement portal.</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>integer (int64)</code></td>
    <td>The version number of the procurement portal preference configuration.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_procurement_portal_preferences">

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
    <td><CopyableCode code="aws_account_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID associated with this procurement portal preference summary. (pattern: &lt;code&gt;\d&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="buyer_domain" /></td>
    <td><code>string</code></td>
    <td>The domain identifier for the buyer in the procurement portal. (NetworkID)</td>
</tr>
<tr>
    <td><CopyableCode code="buyer_identifier" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the buyer in the procurement portal. (pattern: &lt;code&gt;\S+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="create_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the procurement portal preference was created.</td>
</tr>
<tr>
    <td><CopyableCode code="einvoice_delivery_enabled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether e-invoice delivery is enabled for this procurement portal preference.</td>
</tr>
<tr>
    <td><CopyableCode code="einvoice_delivery_preference_status" /></td>
    <td><code>string</code></td>
    <td>The current status of the e-invoice delivery preference in this summary. (PENDING_VERIFICATION, TEST_INITIALIZED, TEST_INITIALIZATION_FAILED, TEST_FAILED, ACTIVE, SUSPENDED)</td>
</tr>
<tr>
    <td><CopyableCode code="einvoice_delivery_preference_status_reason" /></td>
    <td><code>string</code></td>
    <td>The reason for the current e-invoice delivery preference status in this summary. (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_update_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the procurement portal preference was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="procurement_portal_name" /></td>
    <td><code>string</code></td>
    <td>The name of the procurement portal. (SAP_BUSINESS_NETWORK, COUPA)</td>
</tr>
<tr>
    <td><CopyableCode code="procurement_portal_preference_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the procurement portal preference. (pattern: &lt;code&gt;arn:aws:invoicing::&#91;0-9&#93;&#123;12&#125;:procurement-portal-preference/&#91;-a-zA-Z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="purchase_order_retrieval_enabled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether purchase order retrieval is enabled for this procurement portal preference.</td>
</tr>
<tr>
    <td><CopyableCode code="purchase_order_retrieval_preference_status" /></td>
    <td><code>string</code></td>
    <td>The current status of the purchase order retrieval preference in this summary. (PENDING_VERIFICATION, TEST_INITIALIZED, TEST_INITIALIZATION_FAILED, TEST_FAILED, ACTIVE, SUSPENDED)</td>
</tr>
<tr>
    <td><CopyableCode code="purchase_order_retrieval_preference_status_reason" /></td>
    <td><code>string</code></td>
    <td>The reason for the current purchase order retrieval preference status in this summary. (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="selector" /></td>
    <td><code>object</code></td>
    <td>Specifies criteria for selecting which invoices should be processed using a particular procurement portal preference.</td>
</tr>
<tr>
    <td><CopyableCode code="supplier_domain" /></td>
    <td><code>string</code></td>
    <td>The domain identifier for the supplier in the procurement portal. (NetworkID)</td>
</tr>
<tr>
    <td><CopyableCode code="supplier_identifier" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the supplier in the procurement portal. (pattern: &lt;code&gt;\S+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>integer (int64)</code></td>
    <td>The version number of the procurement portal preference configuration in this summary.</td>
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
    <td><a href="#get_procurement_portal_preference"><CopyableCode code="get_procurement_portal_preference" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This feature API is subject to changing at any time. For more information, see the Amazon Web Services Service Terms (Betas and Previews). Retrieves the details of a specific procurement portal preference configuration.</td>
</tr>
<tr>
    <td><a href="#list_procurement_portal_preferences"><CopyableCode code="list_procurement_portal_preferences" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This feature API is subject to changing at any time. For more information, see the Amazon Web Services Service Terms (Betas and Previews). Retrieves a list of procurement portal preferences associated with the Amazon Web Services account.</td>
</tr>
<tr>
    <td><a href="#create_procurement_portal_preference"><CopyableCode code="create_procurement_portal_preference" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ProcurementPortalName"><code>ProcurementPortalName</code></a>, <a href="#parameter-BuyerDomain"><code>BuyerDomain</code></a>, <a href="#parameter-BuyerIdentifier"><code>BuyerIdentifier</code></a>, <a href="#parameter-SupplierDomain"><code>SupplierDomain</code></a>, <a href="#parameter-SupplierIdentifier"><code>SupplierIdentifier</code></a>, <a href="#parameter-EinvoiceDeliveryEnabled"><code>EinvoiceDeliveryEnabled</code></a>, <a href="#parameter-PurchaseOrderRetrievalEnabled"><code>PurchaseOrderRetrievalEnabled</code></a>, <a href="#parameter-Contacts"><code>Contacts</code></a></td>
    <td></td>
    <td>This feature API is subject to changing at any time. For more information, see the Amazon Web Services Service Terms (Betas and Previews). Creates a procurement portal preference configuration for e-invoice delivery and purchase order retrieval. This preference defines how invoices are delivered to a procurement portal and how purchase orders are retrieved.</td>
</tr>
<tr>
    <td><a href="#update_procurement_portal_preference_status"><CopyableCode code="update_procurement_portal_preference_status" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ProcurementPortalPreferenceArn"><code>ProcurementPortalPreferenceArn</code></a></td>
    <td></td>
    <td>This feature API is subject to changing at any time. For more information, see the Amazon Web Services Service Terms (Betas and Previews). Updates the status of a procurement portal preference, including the activation state of e-invoice delivery and purchase order retrieval features.</td>
</tr>
<tr>
    <td><a href="#put_procurement_portal_preference"><CopyableCode code="put_procurement_portal_preference" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ProcurementPortalPreferenceArn"><code>ProcurementPortalPreferenceArn</code></a>, <a href="#parameter-EinvoiceDeliveryEnabled"><code>EinvoiceDeliveryEnabled</code></a>, <a href="#parameter-PurchaseOrderRetrievalEnabled"><code>PurchaseOrderRetrievalEnabled</code></a>, <a href="#parameter-Contacts"><code>Contacts</code></a></td>
    <td></td>
    <td>This feature API is subject to changing at any time. For more information, see the Amazon Web Services Service Terms (Betas and Previews). Updates an existing procurement portal preference configuration. This operation can modify settings for e-invoice delivery and purchase order retrieval.</td>
</tr>
<tr>
    <td><a href="#delete_procurement_portal_preference"><CopyableCode code="delete_procurement_portal_preference" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This feature API is subject to changing at any time. For more information, see the Amazon Web Services Service Terms (Betas and Previews). Deletes an existing procurement portal preference. This action cannot be undone. Active e-invoice delivery and PO retrieval configurations will be terminated.</td>
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
    defaultValue="get_procurement_portal_preference"
    values={[
        { label: 'get_procurement_portal_preference', value: 'get_procurement_portal_preference' },
        { label: 'list_procurement_portal_preferences', value: 'list_procurement_portal_preferences' }
    ]}
>
<TabItem value="get_procurement_portal_preference">

This feature API is subject to changing at any time. For more information, see the Amazon Web Services Service Terms (Betas and Previews). Retrieves the details of a specific procurement portal preference configuration.

```sql
SELECT
aws_account_id,
buyer_domain,
buyer_identifier,
contacts,
create_date,
einvoice_delivery_enabled,
einvoice_delivery_preference,
einvoice_delivery_preference_status,
einvoice_delivery_preference_status_reason,
last_update_date,
procurement_portal_instance_endpoint,
procurement_portal_name,
procurement_portal_preference_arn,
procurement_portal_shared_secret,
purchase_order_retrieval_enabled,
purchase_order_retrieval_endpoint,
purchase_order_retrieval_preference_status,
purchase_order_retrieval_preference_status_reason,
selector,
supplier_domain,
supplier_identifier,
test_env_preference,
version
FROM aws.invoicing.procurement_portal_preferences
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_procurement_portal_preferences">

This feature API is subject to changing at any time. For more information, see the Amazon Web Services Service Terms (Betas and Previews). Retrieves a list of procurement portal preferences associated with the Amazon Web Services account.

```sql
SELECT
aws_account_id,
buyer_domain,
buyer_identifier,
create_date,
einvoice_delivery_enabled,
einvoice_delivery_preference_status,
einvoice_delivery_preference_status_reason,
last_update_date,
procurement_portal_name,
procurement_portal_preference_arn,
purchase_order_retrieval_enabled,
purchase_order_retrieval_preference_status,
purchase_order_retrieval_preference_status_reason,
selector,
supplier_domain,
supplier_identifier,
version
FROM aws.invoicing.procurement_portal_preferences
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_procurement_portal_preference"
    values={[
        { label: 'create_procurement_portal_preference', value: 'create_procurement_portal_preference' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_procurement_portal_preference">

This feature API is subject to changing at any time. For more information, see the Amazon Web Services Service Terms (Betas and Previews). Creates a procurement portal preference configuration for e-invoice delivery and purchase order retrieval. This preference defines how invoices are delivered to a procurement portal and how purchase orders are retrieved.

```sql
INSERT INTO aws.invoicing.procurement_portal_preferences (
ProcurementPortalName,
BuyerDomain,
BuyerIdentifier,
SupplierDomain,
SupplierIdentifier,
Selector,
ProcurementPortalSharedSecret,
ProcurementPortalInstanceEndpoint,
TestEnvPreference,
EinvoiceDeliveryEnabled,
EinvoiceDeliveryPreference,
PurchaseOrderRetrievalEnabled,
Contacts,
ResourceTags,
ClientToken,
region
)
SELECT 
'{{ ProcurementPortalName }}' /* required */,
'{{ BuyerDomain }}' /* required */,
'{{ BuyerIdentifier }}' /* required */,
'{{ SupplierDomain }}' /* required */,
'{{ SupplierIdentifier }}' /* required */,
'{{ Selector }}',
'{{ ProcurementPortalSharedSecret }}',
'{{ ProcurementPortalInstanceEndpoint }}',
'{{ TestEnvPreference }}',
{{ EinvoiceDeliveryEnabled }} /* required */,
'{{ EinvoiceDeliveryPreference }}',
{{ PurchaseOrderRetrievalEnabled }} /* required */,
'{{ Contacts }}' /* required */,
'{{ ResourceTags }}',
'{{ ClientToken }}',
'{{ region }}'
RETURNING
procurement_portal_preference_arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: procurement_portal_preferences
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the procurement_portal_preferences resource.
    - name: ProcurementPortalName
      value: "{{ ProcurementPortalName }}"
      description: |
        The name of the procurement portal.
      valid_values: ['SAP_BUSINESS_NETWORK', 'COUPA']
    - name: BuyerDomain
      value: "{{ BuyerDomain }}"
      description: |
        The domain identifier for the buyer in the procurement portal.
      valid_values: ['NetworkID']
    - name: BuyerIdentifier
      value: "{{ BuyerIdentifier }}"
      description: |
        The unique identifier for the buyer in the procurement portal.
    - name: SupplierDomain
      value: "{{ SupplierDomain }}"
      description: |
        The domain identifier for the supplier in the procurement portal.
      valid_values: ['NetworkID']
    - name: SupplierIdentifier
      value: "{{ SupplierIdentifier }}"
      description: |
        The unique identifier for the supplier in the procurement portal.
    - name: Selector
      description: |
        Specifies criteria for selecting which invoices should be processed using a particular procurement portal preference.
      value:
        InvoiceUnitArns:
          - "{{ InvoiceUnitArns }}"
        SellerOfRecords:
          - "{{ SellerOfRecords }}"
    - name: ProcurementPortalSharedSecret
      value: "{{ ProcurementPortalSharedSecret }}"
      description: |
        The shared secret or authentication credential used to establish secure communication with the procurement portal. This value must be encrypted at rest.
    - name: ProcurementPortalInstanceEndpoint
      value: "{{ ProcurementPortalInstanceEndpoint }}"
      description: |
        The endpoint URL where e-invoices will be delivered to the procurement portal. Must be a valid HTTPS URL.
    - name: TestEnvPreference
      description: |
        Configuration settings for the test environment of the procurement portal. Includes test credentials and endpoints that are used for validation before production deployment.
      value:
        BuyerDomain: "{{ BuyerDomain }}"
        BuyerIdentifier: "{{ BuyerIdentifier }}"
        SupplierDomain: "{{ SupplierDomain }}"
        SupplierIdentifier: "{{ SupplierIdentifier }}"
        ProcurementPortalSharedSecret: "{{ ProcurementPortalSharedSecret }}"
        ProcurementPortalInstanceEndpoint: "{{ ProcurementPortalInstanceEndpoint }}"
    - name: EinvoiceDeliveryEnabled
      value: {{ EinvoiceDeliveryEnabled }}
      description: |
        Indicates whether e-invoice delivery is enabled for this procurement portal preference. Set to true to enable e-invoice delivery, false to disable.
    - name: EinvoiceDeliveryPreference
      description: |
        Specifies the e-invoice delivery configuration including document types, attachment types, and customization settings for the portal.
      value:
        EinvoiceDeliveryDocumentTypes:
          - "{{ EinvoiceDeliveryDocumentTypes }}"
        EinvoiceDeliveryAttachmentTypes:
          - "{{ EinvoiceDeliveryAttachmentTypes }}"
        Protocol: "{{ Protocol }}"
        PurchaseOrderDataSources:
          - EinvoiceDeliveryDocumentType: "{{ EinvoiceDeliveryDocumentType }}"
            PurchaseOrderDataSourceType: "{{ PurchaseOrderDataSourceType }}"
        ConnectionTestingMethod: "{{ ConnectionTestingMethod }}"
        EinvoiceDeliveryActivationDate: "{{ EinvoiceDeliveryActivationDate }}"
    - name: PurchaseOrderRetrievalEnabled
      value: {{ PurchaseOrderRetrievalEnabled }}
      description: |
        Indicates whether purchase order retrieval is enabled for this procurement portal preference. Set to true to enable PO retrieval, false to disable.
    - name: Contacts
      description: |
        List of contact information for portal administrators and technical contacts responsible for the e-invoice integration.
      value:
        - Name: "{{ Name }}"
          Email: "{{ Email }}"
    - name: ResourceTags
      description: |
        The tags to apply to this procurement portal preference resource. Each tag consists of a key and an optional value.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: ClientToken
      value: "{{ ClientToken }}"
      description: |
        A unique, case-sensitive identifier that you provide to ensure idempotency of the request.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_procurement_portal_preference_status"
    values={[
        { label: 'update_procurement_portal_preference_status', value: 'update_procurement_portal_preference_status' }
    ]}
>
<TabItem value="update_procurement_portal_preference_status">

This feature API is subject to changing at any time. For more information, see the Amazon Web Services Service Terms (Betas and Previews). Updates the status of a procurement portal preference, including the activation state of e-invoice delivery and purchase order retrieval features.

```sql
UPDATE aws.invoicing.procurement_portal_preferences
SET 
ProcurementPortalPreferenceArn = '{{ ProcurementPortalPreferenceArn }}',
EinvoiceDeliveryPreferenceStatus = '{{ EinvoiceDeliveryPreferenceStatus }}',
EinvoiceDeliveryPreferenceStatusReason = '{{ EinvoiceDeliveryPreferenceStatusReason }}',
PurchaseOrderRetrievalPreferenceStatus = '{{ PurchaseOrderRetrievalPreferenceStatus }}',
PurchaseOrderRetrievalPreferenceStatusReason = '{{ PurchaseOrderRetrievalPreferenceStatusReason }}'
WHERE 
region = '{{ region }}' --required
AND ProcurementPortalPreferenceArn = '{{ ProcurementPortalPreferenceArn }}' --required
RETURNING
procurement_portal_preference_arn;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_procurement_portal_preference"
    values={[
        { label: 'put_procurement_portal_preference', value: 'put_procurement_portal_preference' }
    ]}
>
<TabItem value="put_procurement_portal_preference">

This feature API is subject to changing at any time. For more information, see the Amazon Web Services Service Terms (Betas and Previews). Updates an existing procurement portal preference configuration. This operation can modify settings for e-invoice delivery and purchase order retrieval.

```sql
REPLACE aws.invoicing.procurement_portal_preferences
SET 
ProcurementPortalPreferenceArn = '{{ ProcurementPortalPreferenceArn }}',
Selector = '{{ Selector }}',
ProcurementPortalSharedSecret = '{{ ProcurementPortalSharedSecret }}',
ProcurementPortalInstanceEndpoint = '{{ ProcurementPortalInstanceEndpoint }}',
TestEnvPreference = '{{ TestEnvPreference }}',
EinvoiceDeliveryEnabled = {{ EinvoiceDeliveryEnabled }},
EinvoiceDeliveryPreference = '{{ EinvoiceDeliveryPreference }}',
PurchaseOrderRetrievalEnabled = {{ PurchaseOrderRetrievalEnabled }},
Contacts = '{{ Contacts }}'
WHERE 
region = '{{ region }}' --required
AND ProcurementPortalPreferenceArn = '{{ ProcurementPortalPreferenceArn }}' --required
AND EinvoiceDeliveryEnabled = {{ EinvoiceDeliveryEnabled }} --required
AND PurchaseOrderRetrievalEnabled = {{ PurchaseOrderRetrievalEnabled }} --required
AND Contacts = '{{ Contacts }}' --required
RETURNING
procurement_portal_preference_arn;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_procurement_portal_preference"
    values={[
        { label: 'delete_procurement_portal_preference', value: 'delete_procurement_portal_preference' }
    ]}
>
<TabItem value="delete_procurement_portal_preference">

This feature API is subject to changing at any time. For more information, see the Amazon Web Services Service Terms (Betas and Previews). Deletes an existing procurement portal preference. This action cannot be undone. Active e-invoice delivery and PO retrieval configurations will be terminated.

```sql
DELETE FROM aws.invoicing.procurement_portal_preferences
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
